const express = require("express");
const User = require("../../models/Users");
const config = require("../../config/GenToken");
const jwt = require("jsonwebtoken");
const Cookies = require("universal-cookie");

let auth = function(req, res, next) {
  const cookies = new Cookies(req.headers.cookie);
  const checkCookie = cookies.get("cookie-data");
  if (!checkCookie) {
    req.jwtTest = false;
    next();
  } else {
    jwt.verify(checkCookie, process.env.JWT, function(err, user) {
      if (err) req.jwtTest = false;
      User.findById({
        _id: user.id
      })
        .populate({
          path: "properties",
          populate: { path: "properties" }
        })
        .then(user => {
          let token = config(user);
          req.jwtTest = {
            token: token,
            user: {
              id: user.id,
              name: user.name,
              fav: user.favourites,
              properties: user.properties,
              createdEvents: user.createdEvents,
              admin: user.admin
            }
          };
          next();
        })
        .catch(err => {
          console.log(err);
          req.jwtTest = false;
        });
    });
  }
};

module.exports = auth;
