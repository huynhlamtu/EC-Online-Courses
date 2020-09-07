let controller = {};
let models = require('../models');

let Product = models.Product;

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                include: [{ model: models.Category }],
                attributes: ['id', 'name', 'price', 'imagepath', 'videopath', 'status', 'summary', 'description', 'sold', 'reviewCount', 'overallReview']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

// controller.getById = (id) => {
//     return new Promise((resolve, reject) => {
//         let product;
//         Product
//             .findOne({
//                 where: { id: id },
//             })
//             .then(result => {
//                 product = result;
//                 return models.Comment.findAll({
//                     where: {productId: id},
//                     include: [{ model: models.User }]
//                 });
//             })
//             .then(comments => {
//                 product.Comments = comments;
//                 return models.Review.findAll({
//                     where: {productId: id},
//                     include: [{ model: models.User }]
//                 });
//             })
//             .then(reviews => {
//                 product.Reviews = reviews;
//                 resolve(product);
//             })
        
//             .catch(error => reject(new Error(error)));
//     });
// }

module.exports = controller;