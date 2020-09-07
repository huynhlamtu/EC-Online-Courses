let express = require('express');
let router = express.Router();

router.post('/', (req, res, next) => {
    let controller = require('../controllers/commentController');
    let comment = {
        userId: 1,
        productId: req.body.productId,
        message: req.body.message,
        parentCommentId: null,
    };
    controller
        .add(comment)
        .then(data => {
            res.redirect('shop-detail/' + data.productId);
        })
        .catch(error => next(error));
});
module.exports = router;