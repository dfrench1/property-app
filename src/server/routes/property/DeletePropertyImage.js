const express = require("express");
const Property = require("../../models/Property");
const bluebird = require("bluebird");
const AWS = require("aws-sdk");
let router = express.Router();

router.delete("/deletePropImage", async (req, res) => {
  const { img, property } = req.body;
  try {
    const getProperty = await Property.findById({
      _id: property._id
    });

    getProperty.images = getProperty.images.filter(val => !img.includes(val));
    await img.map(async el => {
      await deleteFile(el);
    });
    await getProperty.save()
    return res.json(getProperty)
  } catch (error) {
    return res.json(error);
  }
});

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

AWS.config.setPromisesDependency(bluebird);
const s3 = new AWS.S3();

const deleteFile = name => {
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: name
  };
  return s3.deleteObject(params).promise();
};

module.exports = router;
