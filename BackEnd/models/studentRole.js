const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Parent = require('./parentRole');

const Student = sequelize.define('Student', {
  name: { type: DataTypes.STRING, allowNull: false },
  birth_date: { type: DataTypes.DATE, unique: false, allowNull: false },
  parent_email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

// Setting up the association
Student.belongsTo(Parent, { foreignKey: 'parent_email' });

module.exports = User;
