const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
   console.log("connection open")
})
.catch(err => {
   console.log("oh no error!")
   console(err)
})



// defining the schema 

// {
//    title: "SPb",
//    year: 2003,
//    score: 10.0,
//    rating: 'Amazing'
// }

const loveSchema = new mongoose.Schema({
title: String,
year: Number,
score: Number,
rating: String
});

//making the model now

const love = mongoose.model('love', loveSchema)
const margot = new love({
   title: "Margot",
   year: 2003,
   score: 10.0,
   rating: "everything"
 });

 love.insertMany([
   {title: "No", year: 0, score: 0.0, rating: "doesnt exist" },
   {title: "Again Not Her", year: 0, score: 0.0, rating: "not her" }
 ])
 .then(data => {
   console.log("Insert Many worked")
   console.log(data)
 })