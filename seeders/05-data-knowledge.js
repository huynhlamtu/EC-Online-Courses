    'use strict';

    module.exports = {
        up: (queryInterface, Sequelize) => {
            let data = [
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 1
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 1
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 2
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 2
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 3
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 3
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 4
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 4
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 5
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 6
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 7
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 8
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 8
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 9
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 9
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 10
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 10
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 11
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 11
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 12
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 13
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 13
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 14
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 14
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 14
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 7
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 6
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 5
                },
                { description: 'Nullam in lacus at arcu varius tristique vitae a ligula. Donec imperdiet vulputate sapien vel mattis.',
                productId: 8
                }
            ];
            data.map(item => {
                item.createdAt = Sequelize.literal('NOW()');
                item.updatedAt = Sequelize.literal('NOW()');
                return item;
            });
            return queryInterface.bulkInsert('Knowledge', data, {});
        },

        down: (queryInterface, Sequelize) => {
            return queryInterface.bulkDelete('Knowledge', null, {});

        }
    };