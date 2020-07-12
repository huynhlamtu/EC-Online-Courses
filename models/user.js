'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
		email: DataTypes.STRING,
        fullname: DataTypes.STRING,
        avatarPath: DataTypes.STRING,
		newsletter: DataTypes.BOOLEAN,
        isAdmin: DataTypes.BOOLEAN
    }, {});
    User.associate = function(models) {
        // associations can be defined here
        User.hasMany(models.Comment, { foreignKey: 'userId' });
        User.hasMany(models.Review, { foreignKey: 'userId' });
    };
    return User;
};