'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [
      {userId: 1, total: 100000},
      {userId: 2, total: 360000},
      {userId: 4, total: 560000}
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Carts', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Carts', null, {});
  }
};
