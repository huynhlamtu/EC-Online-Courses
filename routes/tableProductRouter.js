let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    let tableProductController = require('../controllers/tableProductController');
    tableProductController
        .getAll()
        .then(data => {
            res.locals.products = data;
            res.render('tableProducts', { layout: 'layoutAdmin'});
        })
        .catch(error => next(error));
});

module.exports = router;