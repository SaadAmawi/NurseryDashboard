const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Public Routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected Routes
router.get('/teacher-dashboard', authMiddleware.verifyToken, authMiddleware.checkRole('teacher'), (req, res) => {
  res.send("Teacher Dashboard Access Granted");
});

router.get('/parent-portal', authMiddleware.verifyToken, authMiddleware.checkRole('parent'), (req, res) => {
  res.send("Parent Portal Access Granted");
});

module.exports = router;
