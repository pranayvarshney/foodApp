const { v4: uuidv4 } = require('uuid')
const placeOrder = require('../models/orderModel')
const express = require('express')

const router = express.Router()

router.post('/neworder', (req, res) => {

    const { name, email, userId, cartItems, subTotal, transcationID } = req.body

    const newOrder = new placeOrder({ name, email, userId, cartItems, subTotal, transcationID })

    try {
        newOrder.save()
        res.send("order placed successfully")
    } catch (error) {
        res.status(404).send({
            message: error
        })
    }
}
)


router.get('/allorders/:email', async (req, res) => {
     const {email} = req.params
    try {
        const order = await placeOrder.find({email})
        res.send(order)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
})






module.exports = router























    // console.log("reached here")
    // const {token, subTotal, currentUser,cartItems} = req.body
    // try {
    //     const customer = await stripe.customers.create({
    //         email : token.email,
    //         source : token.id
    //     })
    //     const payment = await stripe.charges.create({
    //         amount : subTotal *100,
    //         currency :'INR',
    //         customer : customer.id,
    //         receipt_email : token.email
    //     },{
    //         idempotencyKey : uuidv4()
    //     })
    //     if (payment){
    //         res.send('payment done')
    //     }
    //     else { 
    //         res.send('payment failed')
    //     }
    // } catch (error) {
    //     return res.status(400).json({
    //         error: error
    //     })
    // }

