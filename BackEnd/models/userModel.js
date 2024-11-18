const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Role = require('./roleModel');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

// Setting up the association
User.belongsTo(Role, { foreignKey: 'roleId' });

module.exports = User;
