import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch((err) => console.error('Connection error:', err.message));

  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));