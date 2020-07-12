    'use strict';

    module.exports = {
        up: (queryInterface, Sequelize) => {
            let data = [{
                    message: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
                    userId: 1,
                    productId: 9,
                    parentCommentId: null
                },
                {
                    message: 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellussemper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
                    userId: 2,
                    productId: 8,
                    parentCommentId: null
                },
                {
                    message: 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
                    userId: 5,
                    productId: 3,
                    parentCommentId: null
                },
                {
                    message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
                    userId: 6,
                    productId: 9,
                    parentCommentId: null
                },
                {
                    message: 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
                    userId: 7,
                    productId: 4,
                    parentCommentId: null
                },
                {
                    message: 'Aenean sit amet justo.',
                    userId: 2,
                    productId: 13,
                    parentCommentId: null
                },
                {
                    message: 'Donec dapibus. Duis at velit eu est congue elementum. In hachabitasse platea dictumst.',
                    userId: 6,
                    productId: 12,
                    parentCommentId: null
                },
                {
                    message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
                    userId: 1,
                    productId: 8,
                    parentCommentId: null
                },
                {
                    message: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
                    userId: 1,
                    productId: 14,
                    parentCommentId: null
                },
                {
                    message: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsumprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
                    userId: 2,
                    productId: 12,
                    parentCommentId: null
                },
                {
                    message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
                    userId: 4,
                    productId: 7,
                    parentCommentId: null
                },
                {
                    message: 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
                    userId: 5,
                    productId: 6,
                    parentCommentId: null
                },
                {
                    message: 'Maecenas ut massa quis augue luctus tincidunt.',
                    userId: 6,
                    productId: 6,
                    parentCommentId: null
                },
                {
                    message: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed,nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
                    userId: 7,
                    productId: 3,
                    parentCommentId: null
                },
                {
                    message: 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
                    userId: 5,
                    productId: 2,
                    parentCommentId: null
                },
                {
                    message: 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
                    userId: 1,
                    productId: 4,
                    parentCommentId: null
                },
                {
                    message: 'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
                    userId: 1,
                    productId: 3,
                    parentCommentId: null
                },
                {
                    message: 'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
                    userId: 6,
                    productId: 2,
                    parentCommentId: null
                },
                {
                    message: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
                    userId: 3,
                    productId: 3,
                    parentCommentId: null
                },
                {
                    message: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eumagna vulputate luctus. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
                    userId: 1,
                    productId: 7,
                    parentCommentId: null
                },
                {
                    message: 'Proin interdum mauris non ligula pellentesque ultrices.',
                    userId: 5,
                    productId: 3,
                    parentCommentId: null
                },
                {
                    message: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
                    userId: 1,
                    productId: 6,
                    parentCommentId: null
                },
                {
                    message: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
                    userId: 3,
                    productId: 5,
                    parentCommentId: null
                },
                {
                    message: 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
                    userId: 5,
                    productId: 14,
                    parentCommentId: null
                },
                {
                    message: 'Vestibulum quam sapien, varius ut, blandit non, interdum in,ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
                    userId: 1,
                    productId: 7,
                    parentCommentId: null
                },
                {
                    message: 'Pellentesque ultrices mattis odio.',
                    userId: 6,
                    productId: 11,
                    parentCommentId: null
                },
                {
                    message: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
                    userId: 4,
                    productId: 10,
                    parentCommentId: null
                },
                {
                    message: 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justoeu massa. Donec dapibus.',
                    userId: 2,
                    productId: 11,
                    parentCommentId: null
                },
                {
                    message: 'Nam nulla.',
                    userId: 3,
                    productId: 13,
                    parentCommentId: null
                },
                {
                    message: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
                    userId: 4,
                    productId: 12,
                    parentCommentId: null
                },
                {
                    message: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nullatempus. Vivamus in felis eu sapien cursus vestibulum.',
                    userId: 5,
                    productId: 9,
                    parentCommentId: null
                },
                {
                    message: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
                    userId: 6,
                    productId: 1,
                    parentCommentId: null
                },
                {
                    message: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut,rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sedsagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
                    userId: 1,
                    productId: 2,
                    parentCommentId: null
                },
                {
                    message: 'Praesent id massa id nisl venenatis lacinia. Aenean sit ametjusto.',
                    userId: 2,
                    productId: 1,
                    parentCommentId: null
                },
                {
                    message: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
                    userId: 5,
                    productId: 5,
                    parentCommentId: null
                },
                {
                    message: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
                    userId: 6,
                    productId: 7,
                    parentCommentId: null
                },
                {
                    message: 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauriseget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
                    userId: 1,
                    productId: 5,
                    parentCommentId: null
                },
                {
                    message: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aeneansit amet justo. Morbi ut odio.',
                    userId: 1,
                    productId: 12,
                    parentCommentId: null
                },
                {
                    message: 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
                    userId: 3,
                    productId: 11,
                    parentCommentId: null
                },
                {
                    message: 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
                    userId: 3,
                    productId: 10,
                    parentCommentId: null
                }
            ];
            data.map(item => {
                item.createdAt = Sequelize.literal('NOW()');
                item.updatedAt = Sequelize.literal('NOW()');
                return item;
            });
            return queryInterface.bulkInsert('Comments', data, {});
        },

        down: (queryInterface, Sequelize) => {
            return queryInterface.bulkDelete('Comments', null, {});

        }
    };