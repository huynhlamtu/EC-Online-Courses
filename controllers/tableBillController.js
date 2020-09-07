let controller = {};
let models = require('../models');

let Bill = models.Bill;

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Bill
            .findAll({
                include: [{ model: models.User }],
                attributes: ['id', 'userId', 'totalcost', 'buydate']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));   
    });
};

module.exports = controller;