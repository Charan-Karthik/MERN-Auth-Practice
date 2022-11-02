const User = require('../models/user.model')
const bcrypt = require('bcrypt')

module.exports.register = (req, res) => {
    // console.log(req.body)

    User.create(req.body)
        .then(user => {
            console.log(user)
            return res.json(user)
        })
        .catch(err => res.status(400).json(err))
}

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
        return res.status(400).json({ error: "User not found" })
    }

    const correctPassword = await bcrypt.compare(req.body.password, user.password)

    if (!correctPassword) {
        return res.status(400).json({ error: "Invalid password" })
    }

    return res.json(user)
}