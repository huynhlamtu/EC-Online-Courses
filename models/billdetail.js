'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BillDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BillDetail.belongsTo(models.Bill, {foreignKey: 'billId'});
      BillDetail.belongsTo(models.Product, {foreignKey: 'productId'});
    }
  };
  BillDetail.init({
    temp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BillDetail',
  });
  return BillDetail;
};