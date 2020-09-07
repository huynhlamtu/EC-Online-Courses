let express = require('express');
let router = express.Router();

router.post('/', (req, res, next) => {
    let controller = require('../controllers/reviewController');
    let review = {
        userId: 1,
        productId: req.body.productId,
        message: req.body.message,
        rating: req.body.rating,
    };
    controller
        .add(review)
        .then(data => {
            res.redirect('shop-detail/' + review.productId);
        })
        .catch(error => next(error));
});
module.exports = router;