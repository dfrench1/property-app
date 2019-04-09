const express = require('express');
const Viewings = require('../../models/Viewings')
const User = require('../../models/Users')
const Booking = require('../../models/Booking')
let router = express.Router();

router.delete('/deleteViewing', async (req, res) => {
    const {data, user} = req.body;
    try {
      Viewings.deleteOne({ _id: data._id }, async (err) => {
        if (err) {
          return res.json({error: err})
        }
        let getUser = await User.findById(user.id)
        await getUser.createdEvents.pull(data._id)
        await getUser.save();
        let checkExists = await Booking.findOne({
          event: data._id
        })
        if (checkExists){
          await Booking.deleteMany({
            event: data._id
          }, async (err) => {
            if (err) {
              return res.json({error: err})
            }
            const viewings = await Viewings.find({})
            .populate('property')
            return res.json(viewings)

          })
        }
        const viewings = await Viewings.find({})
        .populate('property')
        return res.json(viewings)
      })
    } catch(err) {
        return res.json({error: err})
    }
  })

  module.exports = router;