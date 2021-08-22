const mongoose = require('mongoose')


const orderSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    userId : {type : String , require},
    cartItems : [],
    subTotal :{type : Number , required : true },
    transactionID : {type :String, require}
    
},
{
    timestamps : true
})

module.exports = mongoose.model('orders', orderSchema)
