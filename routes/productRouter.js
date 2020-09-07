let express = require('express');
const { query } = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    if ((req.query.category == null) || isNaN(req.query.category)) {
        req.query.category = 0;
    }

    if (req.query.sort == null) {
        req.query.sort = 'name';
    }

    if ((req.query.search == null) || (req.query.search.trim = '')) {
        req.query.search = '';
    }

    let categoryController = require('../controllers/categoryController');
    categoryController
        .getAll(req.query)
        .then(data =>{
            res.locals.categories=data;
            let productController=require('../controllers/productController')
            return productController.getAll(req.query);
        })
        .then(data =>{
            res.locals.products = data;
            res.render('shop');
        })
        .catch(error => next(error));
});

module.exports = router;
