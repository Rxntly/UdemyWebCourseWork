const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride= require('method-override')



const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
   .then(() => {
      console.log("mongo connection open");
   })
   .catch(err => {
      console.log("oh no mongo error!");
      console.log(err);
   });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/products', async (req, res) => {
   try {
      const products = await Product.find({});
      console.log("Fetched products:", products);
      res.render('products/index', { products });
   } catch (e) {
      console.log(e);
      res.status(500).send("Error fetching products");
   }
});


app.get('/products/new', (req, res) => {
   res.render('products/new');
});

app.post('/products', async (req, res) => {
   try {
      const newProduct = new Product(req.body); // Corrected `product` to `Product`
      await newProduct.save();
      console.log(newProduct);
      
      res.send("making your product");
   } catch (e) {
      console.log(e);
      res.status(500).send("Error creating product");
   }
});

app.get('/products/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const product = await Product.findById(id); // Added `await`
      if (!product) {
         return res.status(404).send("Product not found");
      }
      console.log(product);
      res.render('products/show', { product });
   } catch (e) {
      console.log(e);
      res.status(500).send("Error fetching product");
   }
}); 


app.get('/products/:id/edit', async (req,res)=>{
   const {id} = req.params;   
   const product = await Product.findById(id);
   res.render('products/edit', {product})
})

app.put('/products/:id', async(req, res)=> {
   const {id}= req.params;
   const product = await Product.findByIdAndUpdate(id,req.body, {runValidators:true})
   res.redirect('/products/${product._id}'); 
})


app.delete('/products/:id', async (req, res) => {
   const { id } = req.params;
   const deletedProduct = await Product.findByIdAndDelete(id);
   res.redirect('/products');
});


app.listen(3000, () => {
   console.log("hi!");
});