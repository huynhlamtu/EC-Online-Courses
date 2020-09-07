let controller = {};
let models = require('../models');

let Product = models.Product;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.getTrendingProducts = () => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                order: [
                    ['sold', 'DESC']
                ],
                limit: 8,
                include: [{ model: models.Category }],
                attributes: ['id', 'name', 'price', 'imagepath', 'status']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};


controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            include: [{ model: models.Category }],
            attributes: ['id', 'name', 'price', 'imagepath', 'status'],
            where: {}
        };
        if (query.category > 0){
            options.where.categoryId = query.category;
        }

        if (query.search != '') {
            options.where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        if (query.sort) {
            switch(query.sort) {
                case 'name':
                    options.order = [
                        ['name', 'ASC']
                    ];
                    break;
                case 'price - low':
                    options.order = [
                        ['price', 'ASC']
                    ];
                    break;
                case 'price - high':
                    options.order = [
                        ['price', 'DESC']
                    ];
                    break;
                default:
                    options.order = [
                        ['name', 'ASC']
                    ];  
            }
        }
        Product
            .findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getById = (id) => {
    return new Promise((resolve, reject) => {
        Product
            .findOne({
                where: { id: id }
            })
            .then(result => resolve(result))
            .catch(error => reject(new Error(error)));
    });
}

module.exports = controller;