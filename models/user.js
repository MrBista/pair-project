'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Profile)
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      unique:true
    },
    email: {
      type:DataTypes.STRING,
      unique:true
    },
    password: DataTypes.STRING,
    role:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.addHook('beforeCreate', (instance, option) => {
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(instance.password, salt)
    instance.password = hashedPassword
  })
  return User;
};