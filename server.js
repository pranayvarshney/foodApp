const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')
const foodRoute = require('./routes/foodRoute')
const userRoute = require('./routes/userRoute')
const orderRoute = require('./routes/orderRoute')
mongoose.connect("mongodb+srv://node-shop:node-shop@node-rest-shop.sttq1.mongodb.net/food-app?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true })

const food = require("./models/foodModel")

var db = mongoose.connection

db.on('connected', () => {
    console.log("successfull");
})
db.on('error', () => {
    console.log("error in connection");
})

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json())



app.listen(port, () => console.log(`server on port ${port}!`))


app.use('/api/food', foodRoute);
app.use('/api/user', userRoute);
app.use('/api/orders', orderRoute)


if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('client/build'))
    app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, 'client/build/index.html')) })
}