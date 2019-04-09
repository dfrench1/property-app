const express = require('express');
const Property = require('../../models/Property')
const User = require('../../models/Users')
let PostcodesIO = require('postcodesio-client');
let postcodes = new PostcodesIO();
let router = express.Router();

router.put('/editProperty', async (req, res) => {
    const {data, user} = req.body
    let coords = data.coords;
    try {
      if (!data.coords.includes(',')){
        let postcode = await postcodes.lookup(data.coords)
        coords = `${postcode.latitude},${postcode.longitude}`
      }
      const property = await Property.findById({
        '_id': data._id
      })
      property.title = data.title
      property.rooms = data.rooms
      property.guests = data.guests
      property.price = data.price
      property.coords = coords
      await property.save()
      let newProps = await User.findById(user.id)
      .select({'password': 0, 'email': 0})
      .populate({
        path: 'properties',
        populate: { path: 'properties' },
      })
      res.json(newProps)
    }
    catch(err){
      res.json(err)
    }
  })

  module.exports = router;