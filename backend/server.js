import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/products.routes.js';

dotenv.config();

const app = express();

app.use(express.json()); // allows us to use JSON data in the req.body

app.use('/api/products', productRoutes);

app.listen(process.env.PORT, () => {
  connectDB(); //connect to the database
  console.log('Server started at http://localhost:'+ process.env.PORT);
});

