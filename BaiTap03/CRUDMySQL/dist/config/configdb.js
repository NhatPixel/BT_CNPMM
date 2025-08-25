"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// const { Sequelize } = require('sequelize'); // nếu dùng CommonJS thay vì ES6
// Option 3: Passing parameters separately (other dialects)
const sequelize = new sequelize_1.Sequelize('cnpmm', 'root', 'Nhat@1475369', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
exports.default = connectDB;
