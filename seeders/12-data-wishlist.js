'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {userId: 1, productId: 3, status: true},
		  {userId: 1, productId: 4, status: true},
		  {userId: 2, productId: 5, status: true},
		  {userId: 3, productId: 1, status: true},
      {userId: 4, productId: 12, status: true},
      {userId: 4, productId: 9, status: true}
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Wishlists', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Wishlists', null, {});
  }
};
