let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/:id', (req, res, next) => {
    let productDetailController = require('../controllers/productDetailController');
    productDetailController
        .getById(req.params.id)
        .then(result => {
            res.locals.product = result;
            // console.log(result.Comments[0].dataValues.User);
            res.render('shop-detail');
        })
        .catch(error => next(error));
});


module.exports = router;
