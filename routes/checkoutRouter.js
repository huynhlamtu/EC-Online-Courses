let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    var cart = req.session.cart;
    res.locals.cart = cart.getCart();
    res.render('checkout');
    
});

module.exports = router;