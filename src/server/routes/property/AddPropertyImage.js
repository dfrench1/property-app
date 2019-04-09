const express = require('express');
const Property = require('../../models/Property')
const fileType = require('file-type');
const multiparty = require('multiparty');
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const bluebird = require('bluebird');
const async = require('async');

const AWS = require('aws-sdk');
let router = express.Router();

router.post('/addPropImages', (req, res, next) => {
  let arr=[];
  async.waterfall([
    processImage,
    uploadFile,
    saveToDB
  ], (err, result) => {
      if (err) {return res.json(err)}   
      return res.json(result)
  })

  async function processImage(callback){
   const form = new multiparty.Form();
    form.parse(req, (error, fields, files) => {
      if (error) return res.json({error:err})
        files.file.forEach(async file => {
          try {
            const path = file.path;
            const buffer = fs.readFileSync(path);
            const type = fileType(buffer);
            if (!type) return res.json({error:'Invalid format'})
            if (type.ext !== 'jpg' && type.ext !== 'jpeg' 
            && type.ext !== 'gif' && type.ext !== 'png'){
              return res.json({error:'Invalid format'})
            }
  
            const fileName = uuidv4();
            arr.push({filename:fileName, buffer:buffer, type:type})
            return arr
          } catch (err) { 
            return res.json({error:err})
          }
        })
        return callback(null, arr, req);
    })
  }
  })

  async function saveToDB(req, arr, callback){
    const currentProperty = await Property.findById({
      '_id': req.query.id
    })
    if (!currentProperty) {
      throw new Error('No property found');
    }
    arr.forEach(item => {
      currentProperty.images.push(`${item.filename}.${item.type.ext}`);
    })
    currentProperty.save();
    callback(null, currentProperty)
  }
  
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });
  
  AWS.config.setPromisesDependency(bluebird);
  const s3 = new AWS.S3();
  
  function uploadFile (arr, req, callback) {
    arr.forEach(el => {
      const params = {
        ACL: 'public-read',
        Body: el.buffer,
        Bucket: process.env.S3_BUCKET,
        ContentType: el.type.mime,
        Key: `${el.filename}.${el.type.ext}`
      };
      s3.upload(params).promise()
    })
 
    callback(null, req, arr)
    
  };

  module.exports = router;