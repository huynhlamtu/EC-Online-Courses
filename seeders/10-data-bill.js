    'use strict';

    module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            {
                buydate: '2020-6-19 10:23:54',
                totalcost: 40000,
                userId: 1
            },
            {
                buydate: '2020-5-1 10:23:54',
                totalcost: 45000,
                userId: 2
            },
            {
                buydate: '2020-6-9 10:23:54',
                totalcost: 120000,
                userId: 3
            },
            {
                buydate: '2020-5-19 10:23:54',
                totalcost: 224000,
                userId: 4
            },
            {
                buydate: '2020-4-19 10:23:54',
                totalcost: 95000,
                userId: 5
            },
            {
                buydate: '2020-7-1 10:23:54',
                totalcost: 35000,
                userId: 6
            }
        ];
        data.map(item => {
        item.createdAt = Sequelize.literal('NOW()');
        item.updatedAt = Sequelize.literal('NOW()');
        return item;
        });
        return queryInterface.bulkInsert('Bills', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Bills', null, {});
    }
    };
