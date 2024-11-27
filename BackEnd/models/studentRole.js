const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Parent = require('./parentModel');

const Student = sequelize.define('students', {
  parentfullname: { type: DataTypes.STRING, allowNull: false },
  fullname: { type: DataTypes.STRING, allowNull: false },
  birth_date: { type: DataTypes.DATE, allowNull: false },
  parent_email: { type: DataTypes.STRING, allowNull: false },
  gender: { type: DataTypes.STRING, allowNull: false },  // Change to STRING
  nationality: { type: DataTypes.STRING, allowNull: false }, // Change to STRING
  parent_phonenumber: { type: DataTypes.STRING, allowNull: false },
});


module.exports = Student;
