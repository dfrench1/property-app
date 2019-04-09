const express = require('express');
const Bookings = require('../../models/Booking')
const Viewing = require('../../models/Viewings')
let router = express.Router();

router.post('/bookViewing', async (req, res) => {
    const {event, user} = req.body
      try {
        const checkBooked = await Bookings.findOne({
           event: event._id, user: user.id,
        });
        if (checkBooked){
          res.json({error: 'already booked'})
        } 
        else {
          const bookViewing = await Viewing.findOne({ _id: event._id });
          const booking = new Bookings({
            user: user.id,
            event: bookViewing,
            property: event.property
          });

          const result = await booking.save();
          res.json([result])
        }
      } catch (err) {
        res.json({error: err})
      }
    })

    module.exports = router;