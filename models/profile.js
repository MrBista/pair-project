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
      name: {
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
          notEmpty:{
            msg:'Please fill name'
          },
          notNull:{
            msg:'Please fill name'
          }
        }
      },
      imgurl: {
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
          notEmpty:{
            msg:'Please fill img url'
          },
          notNull:{
            msg:'Please fill img url'
          }
        }
      },
      birtdate: {
        type:DataTypes.DATE,
        allowNull:false,
        validate:{
          notEmpty:{
            msg:'Please fill birth date'
          },
          notNull: {
            msg:'Please fill birth date'
          }
        }
        
      },
      gender: {
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
          notEmpty:{
            msg:'Please chose gender'
          },
          notNull:{
            msg:'Please chose gender'
          }
        }
      },
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Profile',
    }
  );
  return Profile;
};
