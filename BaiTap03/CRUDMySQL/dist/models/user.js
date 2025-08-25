"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
exports.initUser = initUser;
const sequelize_1 = require("sequelize");
// 3. Tạo class User
class User extends sequelize_1.Model {
    static associate(models) {
        // định nghĩa quan hệ ở đây nếu có
    }
}
exports.User = User;
// 4. Hàm khởi tạo model
function initUser(sequelize) {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        firstName: sequelize_1.DataTypes.STRING,
        lastName: sequelize_1.DataTypes.STRING,
        address: sequelize_1.DataTypes.STRING,
        phoneNumber: sequelize_1.DataTypes.STRING,
        gender: sequelize_1.DataTypes.BOOLEAN,
        image: sequelize_1.DataTypes.STRING,
        roleId: sequelize_1.DataTypes.STRING,
        positionId: sequelize_1.DataTypes.STRING,
    }, {
        sequelize,
        modelName: "User",
        tableName: "Users",
    });
    return User;
}
