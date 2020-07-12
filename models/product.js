'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
		imagepath: DataTypes.TEXT,
		videopath: DataTypes.TEXT,
		status: DataTypes.STRING,
        summary: DataTypes.TEXT,
        description: DataTypes.TEXT,
        sold: DataTypes.INTEGER,
        overallReview: DataTypes.DOUBLE, //rank: 0 -> 5
        reviewCount: DataTypes.INTEGER
    }, {});
    Product.associate = function(models) {
        // associations can be defined here
        Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
        Product.hasMany(models.Comment, { foreignKey: 'productId' });
        Product.hasMany(models.Review, { foreignKey: 'productId' });
		Product.hasMany(models.Require, { foreignKey: 'productId' });
		Product.hasMany(models.Knowledge, { foreignKey: 'productId' });
        Product.hasMany(models.BillDetail, { foreignKey: 'productId' });
		Product.hasMany(models.CartDetail, { foreignKey: 'productId' });
    };
    return Product;
};