'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Profile);
      User.hasMany(models.Receipt);
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          arg: true,
          msg: 'This username is already taken.'
        },
        validate: {
          notNull: {
            msg: 'Please Filled name section',
          },
          notEmpty: {
            msg: 'Please Filled name section',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          arg: true,
          msg: 'This email is already taken.'
        },
        validate: {
          notNull: {
            msg: 'Please Filled email section',
          },
          notEmpty: {
            msg: 'Please Filled email section',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          
          min: {
            args: 10,
            msg: 'Minimum word is 10',
          },
          notEmpty: {
            msg:'Please filled password section'
          },
          notNull:{
            msg:'Please filled password section'
          },
          isStrong(value) {
            const isNonWhiteSpace = /^\S*$/;
            if (!isNonWhiteSpace.test(value)) {
              throw new Error ("Password must not contain Whitespaces.");
            }

            const isContainsUppercase = /^(?=.*[A-Z]).*$/;
            if (!isContainsUppercase.test(value)) {
              throw new Error ("Password must have at least one Uppercase Character.");
            }

            const isContainsLowercase = /^(?=.*[a-z]).*$/;
            if (!isContainsLowercase.test(value)) {
              throw new Error ("Password must have at least one Lowercase Character.");
            }

            const isContainsNumber = /^(?=.*[2-9]).*$/;
            if (!isContainsNumber.test(value)) {
              throw new Error ("Password must contain at least 2 Digit.");
            }

            const isValidLength = /^.{5,16}$/;
            if (!isValidLength.test(value)) {
              throw new Error ("Password must be 10-16 Characters Long.");
            }

          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  User.addHook('beforeCreate', (instance, option) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(instance.password, salt);
    instance.password = hashedPassword;
    instance.role = 'user';
  });
  User.afterCreate((instance, option) => {
    sequelize.models.Profile.create({
      name: instance.name,
      imgurl:
        'https://i.pinimg.com/originals/1c/53/c5/1c53c5b3f3c6e788bfd32f2b4d54ed59.jpg',
      birtdate: null,
      gender: null,
      UserId: instance.id,
    });
  });

  return User;
};
