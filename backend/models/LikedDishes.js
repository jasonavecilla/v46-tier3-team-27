const { sequelize } = require("../db/connect");
const { DataTypes } = require("sequelize");
const LikedDish = sequelize.define("LikeDish", {
  dishId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: { msg: `Must enter an Id` },
    },
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: `Must enter an user Id` },
    },
  },
  recipe: {
    type: DataTypes.JSON,
    allowNull: false,
    validate: {
      notEmpty: { msg: `Must enter a recipe` },
    },
  },
});

const syncTable = async () => {
  await LikedDish.sync({ alter: true });
};
// syncTable();
module.exports = LikedDish;
