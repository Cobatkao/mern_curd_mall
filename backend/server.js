import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
connectDB();

app.get('/', (req, res) => {
  res.send('服务器已经运行...');
})

app.get('/api/products', (req, res) => {
  res.status(200).json(products); 
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(product => product._id === req.params.id)
  res.status(200).json(product);
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`服务器已经运行在${process.env.PORT}端口上，当前是${process.env.NODE_ENV}模式下...`);
})