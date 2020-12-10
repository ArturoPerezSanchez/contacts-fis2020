const usersCtrl = {}

const User = require('../models/User')

usersCtrl.getUsers = async (req, res) => {
    const users =  await User.find()
    res.json(users)
}

usersCtrl.createUser = async (req, res) => {
    const {userName} = req.body
    const newUser = new User({ userName })
    await newUser.save()
    res.json({message: "User created"})
}

usersCtrl.deleteUser = async (req, res) => {
    await User.findOneAndDelete(req.params.id)
    res.json({message: 'user deleted'})
}

module.exports = usersCtrl