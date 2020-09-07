let controller = {};
let models = require('../models');

let Comment = models.Comment;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Comment
            .findAll({
                attributes: ['id', 'message'],
                include: [{ model: models.ProductComment }]
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.add = (comment) => {
    return new Promise((resolve, reject) => {
        Comment
            .create(comment)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
}

module.exports = controller;