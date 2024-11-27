const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Parent = sequelize.define('parents', {
  fullname: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  phonenumber: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

// Setting up the association

module.exports = Parent;
