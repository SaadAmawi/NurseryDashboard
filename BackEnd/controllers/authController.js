const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const Parent = require('../models/parentModel');
const Student = require('../models/studentRole');

// Register a new user
exports.register = async (req, res) => {
  const { fullname, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);


  const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
    role,
  });

  res.status(201).send({ message: "User registered successfully" });
};

// User login and token generation
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  // If no user found or password does not match
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Send response with the generated token
  res.send({ token });
};

// Register a new Parent
exports.registerParent = async (req, res) => {
  const { fullname, email,phonenumber, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);


  const parent = await Parent.create({
    fullname,
    email,
    phonenumber,
    password: hashedPassword,
  });

  res.status(201).send({ message: "User registered successfully" });
};


exports.createStudent = async (req, res) => {
  try {
    // Extract the student data from the request body
    const studentData = req.body;

  

    // Create the student and automatically set parent_phonenumber from the parent data
    const student = await Student.create({
      parentfullname:studentData.parentfullname,
      fullname:studentData.fullname,
      birth_date:studentData.birth_date,
      parent_email:studentData.parent_email,
      gender:studentData.gender,
      nationality:studentData.nationality,
      parent_phonenumber:studentData.parent_phonenumber
    });


    // Return the newly created student record in the response
    return res.status(201).json({
      message: 'Student created successfully',
      student: student
    });
  } catch (error) {
    // Return an error response if something goes wrong
    return res.status(500).json({
      message: `Error creating student: ${error.message}`
    });
  }
};
