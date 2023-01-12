'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User);
    }
    get birtdateS(){
      return this.birtdate
        .toLocaleString('id-ID', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
    }
  }
  Profile.init(
    {
      name: DataTypes.STRING,
      imgurl: DataTypes.STRING,
      birtdate: DataTypes.DATE,
      gender: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Profile',
    }
  );
  return Profile;
};
