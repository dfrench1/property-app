const express = require('express');
const User = require('../../models/Users')
let router = express.Router();

router.post('/favourites', function(req, res, next) {
    const {fav, user} = req.body;
    User.findOne({_id: user.id}, async function (err, user) {
      if (err) return err;
      let checkFav = await user.favourites.get(fav.propID)
      if (checkFav){
        await user.favourites.set(`${fav.propID}`, undefined)
        user.save();
        return res.json(user.favourites)
      } else {
        await user.favourites.set(`${fav.propID}`, `${fav.title}`)
        user.save();
        return res.json(user.favourites)
      }
    })
    .catch(err => res.json(err))
   
  })
  
  module.exports = router;