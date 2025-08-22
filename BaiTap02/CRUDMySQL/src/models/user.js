'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * Đây là chỗ để định nghĩa các mối quan hệ giữa bảng (1-nhiều, nhiều-nhiều).
     */
    static associate(models) {
      // định nghĩa quan hệ ở đây
    }
  }

  // Khai báo các trường (columns) trong bảng User
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    roleId: DataTypes.STRING,
    positionId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
