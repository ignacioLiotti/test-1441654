const express = require('express')
const userRouter = express.Router()
const { UserModel } = require('../models/users')
const app = express()

userRouter.get('/test2', async (req, res) => {
    try {
        const user = await UserModel.findAll()
        console.log(user)
        return res.send(user)
    }
    catch (error) {
        res.send(error)
    }
}
)

    
module.exports = userRouter
 