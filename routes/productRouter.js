let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    let categoryController = require('../controllers/categoryController');
    categoryController
        .getAll()
        .then(data =>{
            res.locals.categories=data;
            let productController=require('../controllers/productController')
            return productController.getAll();
        })

        .then(data =>{
            res.locals.products =data;
            res.render('../views/shop.hbs');
        })
        .catch(error => next(error));
  
});

router.get('/:id', (req, res) => {
    res.render('../views/shop-detail.hbs');
});

module.exports = router;
