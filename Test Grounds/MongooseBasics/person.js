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

const personSchema = new mongoose.Schema  ({
   first: String,
   Last: String
})

personSchema.virtual('fullName').get(function(){
   return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person', personSchema)