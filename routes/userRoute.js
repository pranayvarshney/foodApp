const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
router.post('/register', (req,res)=>{
    const {name,email,password} = req.body
    const newUser = new User({name, email, password})

    try {
        newUser.save()
        res.send('user registered successfully')
    } catch (error) {
        return res.status(400).json({
            error : error
        })
    }
}
)
router.post('/login', async(req, res) => {
    const {email, password } = req.body
    try {
        const user = await User.find({email,password})
        if(user.length>0){
            const currentUser ={
                name : user[0].name,
               email: user[0].email,
               
                _id: user[0]._id,
            }
            res.send(currentUser)
        }
        else{
            return res.send.status(400).json({
                message : "user login failed"
            })
        }
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}
)









module.exports = router