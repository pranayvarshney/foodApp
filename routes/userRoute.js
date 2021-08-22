const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: true }));
router.post('/register', (req, res) => {
    const { name, email, password } = req.body
    try {
        const existinguser = User.find({ email: email })
        if (existinguser.length >=1) {
         return  res.status(500).send("user already present")
        }
        else {
            bcrypt.hash(password, 10, (err, hash) => {
                console.log(hash)
                if (err) {
                    res.status(500).json({
                        error: err
                    })
                }
               
                    const newUser = new User({ 
                         name: name,
                        email: email,
                        password: hash
                        
                        
                        })
                    newUser.save().then(result => {
                        console.log(result)
                        return res.status(200).json({
                            message : 'user created successfully'
                        })
                        
                    }).catch(err => {
                        return res.status(400).json({
                            error: err
                        })}
                        
                    )
                  
                
            })

        }

    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}
)
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        User.find({ email: email }).exec().then(user => {
            if (user.length < 1) {
                console.log("user not found")
                return res.status(404).json({
                    message: "auth failed"
                })

            }
            else {
                bcrypt.compare(password, user[0].password, (err, result) => {
                    if (err) {
                        return res.status(404).json({
                            message: "auth failed"
                        })

                    }
                    if (result) {
                        const currentUser = {
                            name: user[0].name,
                            email: user[0].email,

                            _id: user[0]._id,
                        }
                        res.send(currentUser)

                    }
                    else {
                        return res.status(404).json({
                            message: "auth failed"
                        })
                    }
                   


                })
            }

        }).catch(err => {
           
            return res.status(404).json({
                message :err
            })
        })
    } 
    catch (error) {
        
        return res.status(404).json({
            message : error
        })
    }


})







//     try {
//         const user = await User.find({ email, password })
//         if (user.length > 0) {
//             const currentUser = {
//                 name: user[0].name,
//                 email: user[0].email,

//                 _id: user[0]._id,
//             }
//             res.send(currentUser)
//         }
//         else {
//             return res.send.status(400).json({
//                 message: "user login failed"
//             })
//         }
//     } catch (error) {
//         return res.status(400).json({
//             error: error
//         })
//     }
// }
// )









module.exports = router