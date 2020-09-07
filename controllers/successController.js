let controller = {};
let models = require('../models');
let Product = models.Product

controller.updateProduct = (id) => {
    //console.log('updating id', id);
    Product.findOne({
        where: { id: id }
    })
    .then(result => {
        Product
            .update({
                sold: result.sold += 1
            }, {
                where: {id: id}
            });
    })
};

module.exports = controller;