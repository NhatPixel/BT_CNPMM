"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewUser = createNewUser;
exports.getAllUser = getAllUser;
exports.getUserInfoById = getUserInfoById;
exports.updateUser = updateUser;
exports.deleteUserById = deleteUserById;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models_1 = require("../models");
const salt = bcryptjs_1.default.genSaltSync(10);
// Hàm hash password
async function hashUserPassword(password) {
    return bcryptjs_1.default.hash(password, salt);
}
// Tạo user mới
async function createNewUser(data) {
    const hashPasswordFromBcrypt = await hashUserPassword(data.password);
    await models_1.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
    });
    return "OK create a new user successfully";
}
// Lấy tất cả user
async function getAllUser() {
    return await models_1.User.findAll({ raw: true });
}
// Lấy user theo id
async function getUserInfoById(userId) {
    const user = await models_1.User.findOne({
        where: { id: userId },
        raw: true,
    });
    return user || null;
}
// Update user
async function updateUser(data) {
    const user = await models_1.User.findOne({ where: { id: data.id } });
    if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        await user.save();
    }
    return await models_1.User.findAll({ raw: true });
}
// Xóa user
async function deleteUserById(userId) {
    const user = await models_1.User.findOne({ where: { id: userId } });
    if (user) {
        await user.destroy();
    }
}
