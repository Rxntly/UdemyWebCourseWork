const mongoose = require('mongoose')
const { type } = require('os')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
   console.log("connection open")
})
.catch(err => {
   console.log("oh no error!")
   console(err)
})


const productSchema = new mongoose.Schema({
   name: {
      type: String, 
      required: true
   },
   price: {
      type: Number
   }
});

const Product = mongoose.model('Product', productSchema);
 
const bike = new Product({name: 'Mountain Bike', price: 599})
bike.save()
.then( data => {
   console.log("it worked") 
   console.log(data)
}) .catch(err => {
   console.log("didnt work")
})

productSchema.methods.ryan = function(){
   console.log("shalom") 
}