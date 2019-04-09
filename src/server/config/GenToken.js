const jwt = require('jsonwebtoken');

function genToken(user){
    let id = {
      id: user._id.toString(),
      name: user.name,
      fav: user.favourites,
      properties: user.properties,
      createdEvents: user.createdEvents,
      admin: user.admin
    }
    return jwt.sign(id, process.env.JWT, {expiresIn: 60*60*24});
}

module.exports = genToken