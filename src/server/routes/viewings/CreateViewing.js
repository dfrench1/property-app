const express = require('express');
const Viewing = require('../../models/Viewings')
const User = require('../../models/Users')
let router = express.Router();

router.post('/createViewing', async (req, res) => {
    const {data, user} = req.body
    try {
      let newViewing = new Viewing({
        title: data.title,
        description: data.description,
        date: data.date,
        creator: user.id,
        property: data.property
      })
      const result = await newViewing.save();
      const creator = await User.findById(user.id);
      if (!creator) {
        throw new Error('User not found.');
      }
      creator.createdEvents.push(newViewing);
      await creator.save();
      Viewing.populate(result,[{path:'property'}], function (err, viewing){
        if (err) console.log(err)
        res.json(viewing)
      })
    } catch (err) {
      res.json({error: err})
    }
  })

  module.exports = router;