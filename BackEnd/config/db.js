const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
console.log("DATABASE_URL:", process.env.DATABASE_URL);  // Check if it's undefined

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
