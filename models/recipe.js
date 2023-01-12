'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Receipt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Receipt.belongsTo(models.User);
      Receipt.belongsTo(models.Book);
    }
      get date(){
        
      }
  }
  Receipt.init({
    UserId:{
      type:DataTypes.INTEGER,
      references:{
        model:'Users',
        key:'id'
      }
    },
    BookId: {
      type:DataTypes.INTEGER,
      references:{
        model:'Books',
        key:'id'
      }
    },
    checkOutDate: DataTypes.DATE,
    expiredDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Receipt',
  });
  
  return Receipt;
};