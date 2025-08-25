import { Sequelize } from 'sequelize';
// const { Sequelize } = require('sequelize'); // nếu dùng CommonJS thay vì ES6

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('cnpmm', 'root', 'Nhat@1475369', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default connectDB;
