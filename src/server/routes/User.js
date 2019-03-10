const express = require('express');
const User = require('../models/Users')
const config = require ('../config/GenToken')
const bcrypt = require ('bcryptjs')
let router = express.Router();

//'5c73f8872d8fe7283d7d62c2': 'Fantastic warm bright apartment overlooking park'

router.post('/register', async (req, res) => {
  const {name, email, password} = req.body;
  let errors = [];
  if (!name || !email || !password) {
    errors.push({message: 'Please enter all fields' })
    return res.send({errors: errors});
  }
  if (password.length < 6) {
    errors.push({ message: 'Password must be at least 6 characters' });
  }
  if (errors.length > 0){
    res.send({ errors: errors})
  } else {
    let checkExists = await User.findOne({ email: email });
      if (checkExists){
        errors.push({ message: 'Email already exists'})
        return res.send({ errors: errors})
      } else {
        try {        
            let newUser = new User({
                name: name,
                email: email,
                password: password,
                favourites: {}
            });
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, async (err, hash) => {
                if (err) {
                  errors.push({ message: 'Server error please try again'})
                  return res.send({ errors: errors })
                }
               
                newUser.password = hash;
                await newUser.save();
                let token = config(newUser)
                res.json({
                   token: token
                });
              })
            })
        } catch (err) {
          errors.push({ message: 'Server error please try again'})
          return res.send({ errors: errors })
        }
  }
  }
})

// Login
router.post('/login', function (req, res, next) {
  const {email, password} = req.body;
  let errors = [];
  if (!email || !password) {
    errors.push({message: 'Please enter all fields' })
    return res.send({errors: errors});
  }
  User.findOne({
    email: email
  }).then(user => {
    if (!user) {
      errors.push({message: 'That email is not registered' })
      return res.send({errors: errors});
    }

    // Match password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        errors.push({message: 'Server error' })
        return res.send({errors: errors});    
      }
      if (isMatch) {
        let token = config(user)
        res.json({
           token: token
        });
      } else {
        errors.push({message: 'Password incorrect' })
        return res.send({errors: errors});
      }
    });
  });
});

//favourites
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
  .catch(err => console.log(err))
 
})

module.exports = router;