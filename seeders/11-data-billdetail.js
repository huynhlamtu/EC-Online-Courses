    'use strict';

    module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            {  billId: 1, productId: 1 },
            {  billId: 1, productId: 5 },
            {  billId: 1, productId: 7 },
            {  billId: 2, productId: 11 },
            {  billId: 2, productId: 3 },
            {  billId: 3, productId: 4 },
            {  billId: 3, productId: 8 },
            {  billId: 3, productId: 13 },
            {  billId: 4, productId: 9 },
            {  billId: 4, productId: 14 },
            {  billId: 4, productId: 3 },
            {  billId: 5, productId: 2 },
            {  billId: 5, productId: 8 },
            {  billId: 5, productId: 10 },
            {  billId: 6, productId: 12 },
            {  billId: 6, productId: 6 },
            {  billId: 6, productId: 8 },
            {  billId: 6, productId: 1 }
        ];
        data.map(item => {
        item.createdAt = Sequelize.literal('NOW()');
        item.updatedAt = Sequelize.literal('NOW()');
        return item;
        });
        return queryInterface.bulkInsert('BillDetails', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('BillDetails', null, {});
    }
    };
