let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    let tableBillController = require('../controllers/tableBillController');
    tableBillController
        .getAll()
        .then (data => {
            res.locals.bills = data;
            res.render('tableBill', { layout: 'layoutAdmin'});
        })
        .catch(error => next(error));
});

module.exports = router;