'use strict';
const {
  Model
} = require('sequelize');
const User = sequelize.define("Users", {})
const Book= sequelize.define("Books", {})
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      User.belongsToMany(Book, { through: Recipe });
      Book.belongsToMany(User, { through: Recipe });
    }
   
  }
  Recipe.init({
    UserId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER,
    checkOutDate: DataTypes.DATE,
    expiredDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  
  return Recipe;
};