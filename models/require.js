'use strict';
module.exports = (sequelize, DataTypes) => {
    const Require = sequelize.define('Require', {
        description: DataTypes.TEXT
    }, {});
    Require.associate = function(models) {
        // associations can be defined here
		Require.belongsTo(models.Product, { foreignKey: 'productId' });
    };
    return Require;
};