'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Category);
      Book.hasMany(models.Receipt);
    }
  }
  Book.init(
    {
      tittle: DataTypes.STRING,
      author: DataTypes.STRING,
      isbn: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );

  return Book;
};
