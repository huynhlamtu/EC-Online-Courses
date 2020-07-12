  'use strict';

  module.exports = {
    up: async (queryInterface, Sequelize) => {
      let data = [
        {cartId: 1, productId: 1},
        {cartId: 2, productId: 10},
        {cartId: 2, productId: 11},
        {cartId: 3, productId: 6},
        {cartId: 3, productId: 11},
        {cartId: 3, productId: 13}
      ];
      data.map(item => {
        item.createdAt = Sequelize.literal('NOW()');
        item.updatedAt = Sequelize.literal('NOW()');
        return item;
      });
      return queryInterface.bulkInsert('CartDetails', data, {});
    },

    down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('CartDetails', null, {});
    }
  };
