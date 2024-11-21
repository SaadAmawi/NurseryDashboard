// Import necessary libraries
const express = require('express');
const dotenv = require('dotenv');
const { Client } = require('pg'); // PostgreSQL client
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { verifyToken } = require('./middleware/authMiddleware');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express app
const app = express();
const port = 3000; // Port to run the server on

// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());
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

// User registration route
app.post('/register', async (req, res) => {
  const { fullname, email, password, role } = req.body;
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into PostgreSQL database
    const result = await dbClient.query(
      'INSERT INTO users (fullname, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [fullname, email, hashedPassword, role]
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



// Middleware to check if the user has the required role
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.userRole !== role) {
      return res.status(403).send('Access denied');
    }
    next();
  };
};

app.post('/newStudent', async (req, res) => {
  const { name, parent_id, birthdate } = req.body;
  try {
    // Insert user into PostgreSQL database
    const result = await dbClient.query(
      'INSERT INTO students (name, parent_id, birthdate) VALUES ($1, $2, $3) RETURNING *',
      [name, parent_id, birthdate]
    );
    res.status(201).json({
      message: 'Student registered successfully',
      user: result.rows[0],
    });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send('Internal Server Error');
  }
});

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
