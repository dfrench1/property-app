const express = require('express');
const User = require('../../models/Users')
const bcrypt = require ('bcryptjs')
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport')
const router = express.Router();
const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: process.env.SENDGRID_KEY
  }
}))

router.post('/register', async (req, res) => {
    const {name, email, password, admin} = req.body;
    let errors = [];
    if (!name || !email || !password) {
      errors.push({message: 'Please enter all fields' })
      return res.json({errors: errors});
    }
    if (password.length < 6) {
      errors.push({ message: 'Password must be at least 6 characters' });
    }
    if (errors.length > 0){
      res.json({ errors: errors})
    } else {
      let checkExists = await User.findOne({ email: email });
        if (checkExists){
          errors.push({ message: 'Email already exists'})
          return res.json({ errors: errors})
        } else {
          try {        
              let newUser = new User({
                  name: name,
                  email: email,
                  password: password,
                  favourites: {},
                  admin: admin
              });
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, async (err, hash) => {
                  if (err) {
                    errors.push({ message: 'Server error please try again'})
                    return res.json({ errors: errors })
                  }
                 
                  newUser.password = hash;
                  await newUser.save();
                  res.json({
                    message: 'Success! Now you can login..',
                    redirectUrl: '/login'
                  })
                  return transporter.sendMail({
                    to: email,
                    from: 'admin@property-app.com',
                    subject: 'Registration success',
                    html: '<h1>You have successfully registered</h1>'
                  }).catch(err => console.log(err))
                  
                })
              })
          } catch (err) {
            errors.push({ message: 'Server error please try again'})
            return res.json({ errors: errors })
          }
    }
    }
  })

  module.exports = router;