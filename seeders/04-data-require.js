    'use strict';

    module.exports = {
        up: (queryInterface, Sequelize) => {
            let data = [
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 1
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 1
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 2
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 2
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 3
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 3
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 4
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 4
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 5
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 6
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 7
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 8
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 8
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 9
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 9
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 10
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 10
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 11
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 11
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 12
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 13
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 13
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 14
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 14
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 14
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 7
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 6
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 5
                },
                { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                productId: 8
                }
            ];
            data.map(item => {
                item.createdAt = Sequelize.literal('NOW()');
                item.updatedAt = Sequelize.literal('NOW()');
                return item;
            });
            return queryInterface.bulkInsert('Requires', data, {});
        },

        down: (queryInterface, Sequelize) => {
            return queryInterface.bulkDelete('Requires', null, {});

        }
    };