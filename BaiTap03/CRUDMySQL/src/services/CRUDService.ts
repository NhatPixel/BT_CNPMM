import bcrypt from "bcryptjs";
import { User } from "../models";

const salt = bcrypt.genSaltSync(10);

// Hàm hash password
async function hashUserPassword(password: string): Promise<string> {
  return bcrypt.hash(password, salt);
}

// Tạo user mới
export async function createNewUser(data: any): Promise<string> {
  const hashPasswordFromBcrypt = await hashUserPassword(data.password);

  await User.create({
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
export async function getAllUser() {
  return await User.findAll({ raw: true });
}

// Lấy user theo id
export async function getUserInfoById(userId: number | string) {
  const user = await User.findOne({
    where: { id: userId },
    raw: true,
  });
  return user || null;
}

// Update user
export async function updateUser(data: any) {
  const user = await User.findOne({ where: { id: data.id } });
  if (user) {
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.address = data.address;
    await user.save();
  }
  return await User.findAll({ raw: true });
}

// Xóa user
export async function deleteUserById(userId: number | string) {
  const user = await User.findOne({ where: { id: userId } });
  if (user) {
    await user.destroy();
  }
}
