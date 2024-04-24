import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "garciaflix_development",
  username: "garciaflix",
  password: "garciaflix",
  define: {
    underscored: true
  }
})