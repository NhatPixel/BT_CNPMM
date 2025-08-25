import { Sequelize } from "sequelize";
import { initUser, User } from "./user";
import configFile from "../config/config.json";

const env = process.env.NODE_ENV || "development";
const config = (configFile as any)[env];

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Init models
initUser(sequelize);

// Associations
// User.associate?.({});

export { sequelize, User };
