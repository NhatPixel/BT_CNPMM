"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_1.User; } });
const config_json_1 = __importDefault(require("../config/config.json"));
const env = process.env.NODE_ENV || "development";
const config = config_json_1.default[env];
let sequelize;
if (config.use_env_variable) {
    exports.sequelize = sequelize = new sequelize_1.Sequelize(process.env[config.use_env_variable], config);
}
else {
    exports.sequelize = sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
}
// Init models
(0, user_1.initUser)(sequelize);
