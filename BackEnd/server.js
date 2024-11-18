// Import necessary libraries
const express = require('express');
const dotenv = require('dotenv');
const { Client } = require('pg'); // PostgreSQL client
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { verifyToken } = require('./middleware/authMiddleware');


// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express app
const app = express();
const port = 3000; // Port to run the server on

// Middleware to parse JSON bodies
app.use(express.json());

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

// User registration route
app.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into PostgreSQL database
    const result = await dbClient.query(
      'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [username, email, hashedPassword, role]
    );
    res.status(201).json({
      message: 'User registered successfully',
      user: result.rows[0],
    });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send('Internal Server Error');
  }
});

// User login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists in the database
    const result = await dbClient.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid email or password');
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).send('Internal Server Error');
  }
});

// // Middleware to verify JWT token
// const verifyToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     console.log('Authorization Header:', authHeader);
  
//     if (!authHeader) {
//       return res.status(403).send('No token provided');
//     }
  
//     const token = authHeader.split(' ')[1];
//     console.log('Extracted Token:', token);
  
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         console.error('JWT Verification Error:', err);
//         return res.status(500).send('Failed to authenticate token');
//       }
//       req.userId = decoded.id;
//       req.userRole = decoded.role;
//       next();
//     });
//   };

// Middleware to check if the user has the required role
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.userRole !== role) {
      return res.status(403).send('Access denied');
    }
    next();
  };
};

// Protected route for teachers
app.get('/teacher-dashboard', verifyToken, checkRole('teacher'), (req, res) => {
  res.send('Teacher Dashboard Access Granted');
});

// Protected route for parents
app.get('/parent-portal', verifyToken, checkRole('parent'), (req, res) => {
  res.send('Parent Portal Access Granted');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
