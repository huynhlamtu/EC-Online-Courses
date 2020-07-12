let controller = {};
let models = require('../models');

let Review = models.Review;

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Review
            .findAll({
                attributes: ['id', 'message', 'rating'],
                include: [{ model: models.Product }]
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

// controller.getByProductId = (id) => {
//     return new Promise((resolve, reject) => {
//         Review
//             findAll( {
//                 att
//                 include: [{ model: models.ProductReview }]
//             })
//             .then(result => resolve(result))
//             .catch(error => reject(new Error(error)));
//     });
// }

module.exports = controller;