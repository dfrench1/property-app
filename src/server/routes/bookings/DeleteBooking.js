const express = require('express');
const Bookings = require('../../models/Booking')
let router = express.Router();

router.delete('/deleteBooking', async (req, res) => {
    const {data, user} = req.body
      try {
        Bookings.deleteOne({ _id: data._id }, async (err) => {
          if (err) {
            return res.json({error: err})
          }
          const bookings = await Bookings.find({user: user.id})
          .populate('event', ['title', 'description','date'])
          .populate('user', ['name', 'email'])
          .populate('property')
          return res.json(bookings)
        })
      } catch (err) {
        res.json({error: err})
      }
    })

    module.exports = router;