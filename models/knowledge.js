'use strict';
module.exports = (sequelize, DataTypes) => {
    const Knowledge = sequelize.define('Knowledge', {
        description: DataTypes.TEXT
    }, {});
    Knowledge.associate = function(models) {
        // associations can be defined here
		Knowledge.belongsTo(models.Product, { foreignKey: 'productId' });
    };
    return Knowledge;
};