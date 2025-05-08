import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from '../backend/routes/products.routes.js'; // Import product routes
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to use JSON data in the req.body

app.use('/api/products', productRoutes);

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  // });
} 

app.listen(PORT, () => {
  connectDB(); //connect to the database
  console.log('Server started at http://localhost:'+ PORT);
});
