const User = require('../models/user.model')
// const bcrypt = require('bcrypt')

module.exports.register = (req, res) => {
    // console.log(req.body)

    User.create(req.body)
        .then(user => {
            console.log(user)
            return res.json(user)
        })
        .catch(err => res.status(400).json(err))
}

// module.exports.login = (req, res) => {
//     return
// }