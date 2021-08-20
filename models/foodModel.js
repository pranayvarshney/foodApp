const mongoose = require('mongoose')


const foodSchema = mongoose.Schema({
    name : {type : String ,required:true},
    varients : [],
    prices :[],
    category: {type : String , required:true},
    image :{type :String, required:true }
})

module.exports = mongoose.model('food-items',foodSchema)