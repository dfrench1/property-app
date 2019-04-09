const express = require('express');
const Property = require('../../models/Property')
const User = require('../../models/Users')
let PostcodesIO = require('postcodesio-client');
let router = express.Router();
let postcodes = new PostcodesIO();

router.post('/addProperty', async (req, res) => {
    const {data, user} = req.body
    try {
      postcodes.lookup(data.coords)
      .then(async postcode => {
        const coords = `${postcode.latitude},${postcode.longitude}`
    
        let newProperty = new Property({
          title : data.title,
          rooms: data.rooms,
          guests: data.guests,
          price : data.price,
          coords: coords,
          images: [],
          creator: user.id
        })
        const result = await newProperty.save();
        const creator = await User.findById(user.id)
        if (!creator) {
          throw new Error('User not found.');
        }
        creator.properties.push(newProperty);
        await creator.save();
  
        let newProps = await User.findById(user.id)
        .select({'password': 0, 'email': 0})
        .populate({
          path: 'properties',
          populate: { path: 'properties' },
        })
        res.json(newProps)
      })
      .catch(err => {
        res.json({error: err})
      })
     
    } catch (err) {
      res.json({error: err})
    }
  })

  module.exports = router;