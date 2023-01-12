'use strict';
const { Model } = require('sequelize');

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
    get expiredDateG() {
      // return this.expiredDate.toJSON().slice(0, 10);
      return this.expiredDate
        .toLocaleString('id-ID', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
    }
    get checkOutDateG() {
      return this.checkOutDate
        .toLocaleString('id-ID', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
    }
  }
  Receipt.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      BookId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Books',
          key: 'id',
        },
      },
      checkOutDate: DataTypes.DATE,
      expiredDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Receipt',
    }
  );

  return Receipt;
};
