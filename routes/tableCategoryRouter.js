let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    let categoryController = require('../controllers/categoryController');
    categoryController
        .getAll()
        .then (data => {
            res.locals.categories = data;
            res.render('tableCategory', { layout: 'layoutAdmin'});
        })
        .catch(error => next(error));
});

module.exports = router;