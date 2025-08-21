import { Sequelize } from "sequelize";

class Database {
  sequelize;

  constructor() {
    this.sequelize = new Sequelize("auth_assessment", "root", "", {
      host: process.env.HOST || "localhost",
      dialect: process.env.DIALECT || "mysql",
    });
  }

  async testdb() {
    try {
      await this.sequelize.authenticate();
    } catch (error) {
      console.log(error);
    } finally {
      await this.sequelize.close();
    }
  }

  getSequelizeInstance() {
    return this.sequelize;
  }
}

const db = new Database();
export default db;

