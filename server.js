import express from 'express';
const app = express();
import mongoose from 'mongoose';
import productRoute from './routes/product.route.js';
import dotenv from 'dotenv';

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/products',productRoute);

dotenv.config()
const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

mongoose.connect(mongoUri)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(() => {
  console.log('Error connecting to MongoDB');
})


app.listen(port,() => console.log("server Started"));

app.get('/',(req,res) => {
  res.send('Hello World!');
});

