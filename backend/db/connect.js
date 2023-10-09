const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.POSTGRE_URL);
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(`connect to DB`);
  } catch (error) {
    console.log(`unable to connect to DB`);
  }
};

module.exports = { connectDB, sequelize };
