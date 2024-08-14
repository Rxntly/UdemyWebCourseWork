const mongoose = require('mongoose')

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(() => {
   console.log("mongo connection open")
})
.catch(err => {
   console.log("oh no mongo error!")
   console(err)
})

const p = new Product({
   name: 'Banana',
   price: 0.25,
   category: 'fruit'
})
p.save().then(p => {
   console.log(p)
})
.catch(e => {
   console.log(e)
}) 