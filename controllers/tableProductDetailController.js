let controller = {};
let models = require('../models');

let Product = models.Product;

controller.getById = (id) => {
    return new Promise((resolve, reject) => {
        let product;
        Product
            .findOne({
                where: { id: id },
                include: [{ model: models.Category }]
            })
            .then(result => {
                product = result;
                return models.Require.findAll({
                    where: {productId: id}
                });
            })
            .then(Requires => {
                product.Requires = Requires;
                return models.Knowledge.findAll({
                    where: {productId: id}
                });
            })
            .then(Knowledges => {
                product.Knowledges = Knowledges;
                resolve(product);
            })
            .catch(error => reject(new Error(error)));
    });
}

module.exports = controller;