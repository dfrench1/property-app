const express = require('express');
const Property = require('../../models/Property')
const User = require('../../models/Users')
const Viewing = require('../../models/Viewings')
let router = express.Router();

router.delete('/deleteProp', async (req, res) => {
    const {id, user} = req.body
    try {
      Property.deleteOne({ _id: id }, async (err) => {
        if (err) {
          return res.json({error: err})
        }
        let getUser = await User.findById(user.id)
        await getUser.properties.pull(id)
        await getUser.properties.pull(id)
        await getUser.save();

        await Viewing.deleteMany({
          property: id
        }, async (err) => {
          if (err) return res.json(err)
        })
  
        let newProps = await User.findById(user.id)
        .select({'password': 0, 'email': 0})
        .populate({
          path: 'properties',
          populate: { path: 'properties' },
        })
        return res.json(newProps)
      });
    } catch (err) {
      res.json({error: err})
    }
  })

  module.exports = router;