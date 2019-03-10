const jwt = require('jsonwebtoken');

function genToken(user){
    let id = {
      id: user._id.toString(),
      name: user.name,
      fav: user.favourites
    }
    return jwt.sign(id, process.env.JWT, {expiresIn: 60*60*24});
}

module.exports = genToken