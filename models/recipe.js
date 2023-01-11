'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      sequelize.models.User.belongsToMany(models.Book, { through: Recipe });
      sequelize.models.Book.belongsToMany(models.User, { through: Recipe });
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