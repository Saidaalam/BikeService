import express from 'express';
import dotenv from 'dotenv';
import customerRoutes from './routes/customerRoutes';
import serviceRoutes from './routes/serviceRoutes';
import bikeRoutes from './routes/bikeRoutes';

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database URL
const DATABASE_URL = process.env.DATABASE_URL;

// Middleware for parsing JSON requests
app.use(express.json());

// Use the routes
app.use('/api/customers', customerRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bikes', bikeRoutes);

// Default GET route
app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Bike Servicing API is running',
  });
});

// Handle unknown routes
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
