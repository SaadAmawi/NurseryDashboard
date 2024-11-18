const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const Role = require('../models/roleModel');

// Register a new user
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Assign role to user
  const userRole = await Role.findOne({ where: { name: role } });

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    roleId: userRole.id
  });

  res.status(201).send({ message: "User registered successfully" });
};

// User login and token generation
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email }, include: Role });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: user.id, role: user.Role.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.send({ token });
};
