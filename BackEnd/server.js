// Import necessary libraries
const express = require('express');
const dotenv = require('dotenv');
const { Client } = require('pg'); // PostgreSQL client
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { verifyToken } = require('./middleware/authMiddleware');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import controller methods
const { register, login, registerParent,createStudent } = require('./controllers/authController'); // Adjust path if needed
const { getAllStudents } = require('./controllers/studentController'); // Adjust path if needed

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express app
const app = express();
const port = 3000; // Port to run the server on

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());

// Set up the PostgreSQL database connection
const dbClient = new Client({
  connectionString: process.env.DATABASE_URL,
});

dbClient.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch((err) => console.error('Failed to connect to the database', err));

// Route for testing the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use the imported controller methods in the routes
app.post('/register', register);
app.post('/login', login);
app.post('/registerParent', registerParent);
app.post('/createStudent', createStudent);
app.get('/getStudents', getAllStudents);

// Protected route for teachers
app.get('/teacher-dashboard', verifyToken, (req, res) => {
  res.send('Teacher Dashboard Access Granted');
});

// Protected route for parents
app.get('/parent-portal', verifyToken, (req, res) => {
  res.send('Parent Portal Access Granted');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
