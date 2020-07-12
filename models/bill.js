  'use strict';
  const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Bill extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
        Bill.belongsTo(models.User, {foreignKey: 'userId'});
        Bill.hasMany(models.BillDetail, { foreignKey: 'billId' });
      }
    };
    Bill.init({
      buydate: DataTypes.DATE,
      totalcost: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'Bill',
    });
    return Bill;
  };