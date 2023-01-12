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
        unique: true,
        allowNull: false,
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
        unique: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please Filled name section',
          },
          notEmpty: {
            msg: 'Please Filled name section',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //   isStrong(value) {
        //     let strongPassword = new RegExp(
        //       '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
        //     );
        //     let mediumPassword = new RegExp(
        //       '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'
        //     );
        //     if (strongPassword.test(value)) {
        //       throw new Error('Password Strong');
        //     } else if (mediumPassword.test(value)) {
        //       throw new Error('Password almost strong');
        //     } else {
        //       throw new Error('Password too weak');
        //     }
        //   },
        //   min: {
        //     args: 10,
        //     msg: '',
        //   },
        // },
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
