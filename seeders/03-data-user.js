    'use strict';

    module.exports = {
        up: (queryInterface, Sequelize) => {
            let data = [{
                username: "khapham.7165",
                password: "123",
                email: "khapham.7165@gmail.com",
                fullname: "Kha Pham",
                avatarPath: "/images/user-1.png",
                newsletter: true,
                isAdmin: false
            }, {
                username: "chanest",
                password: "123",
                email: "chanestdevil@gmail.com",
                fullname: "Huynh Lam Tu",
                avatarPath: "/images/user-2.png",
                newsletter: false,
                isAdmin: false
            }, {
                username: "wn1409x3",
                password: "123",
                email: "wn1409x3@gmail.com",
                fullname: "Bui Minh Quan",
                avatarPath: "/images/user-3.png",
                newsletter: false,
                isAdmin: false
            }, {
                username: "user65",
                password: "123",
                email: "user65@gmail.com",
                fullname: "Tran Nam",
                avatarPath: "/images/user-4.png",
                newsletter: true,
                isAdmin: false
            }, {
                username: "user23",
                password: "123",
                email: "user23@gmail.com",
                fullname: "Tran Dung",
                avatarPath: "/images/user-5.png",
                newsletter: false,
                isAdmin: false
            }, {
                username: "user5",
                password: "123",
                email: "user5@gmail.com",
                fullname: "Tran Thao",
                avatarPath: "/images/user-6.png",
                newsletter: true,
                isAdmin: false
            }, {
                username: "admin",
                password: "123",
                email: "admin@gmail.com",
                fullname: "Tran Dinh Kien",
                avatarPath: "/images/user-7.png",
                newsletter: false,
                isAdmin: true
            }];
            data.map(item => {
                item.createdAt = Sequelize.literal('NOW()');
                item.updatedAt = Sequelize.literal('NOW()');
                return item;
            });
            return queryInterface.bulkInsert('Users', data, {});
        },

        down: (queryInterface, Sequelize) => {
            return queryInterface.bulkDelete('Users', null, {});

        }
    };