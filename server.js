const express = require('express');
const connectDB = require('./db');
const queryRoutes = require('./routes/queryRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Use express.json() directly instead of body-parser

// Import Middleware
const authenticate = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

app.use(authenticate); // Apply authentication to all routes

// Connect to the database
connectDB();

// Routes
app.use('/api', queryRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.send('Gen AI Analytics Backend is Running!');
});

// Error Handling Middleware (always at the end)
app.use(errorHandler);

// Global error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ error: message });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
