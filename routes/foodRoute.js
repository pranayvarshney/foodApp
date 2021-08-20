const express = require('express')
const router = express.Router()

const Food = require('../models/foodModel')

router.get('/getitems', async(req,res)=>{
    try {
        const food = await Food.find({})
        res.send(food)
    } catch (error) {
        return res.status(404).json({
            message :error
        })
    }
})

module.exports = router