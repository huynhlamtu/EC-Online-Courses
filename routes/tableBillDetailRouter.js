let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('admin', { layout: 'layoutAdmin'});
});

// router.get('/admin', (req, res) => {
//     res.render('admin', { layout: 'layoutAdmin'});
// });

// router.get('/tableProducts', (req, res) => {
//     res.render('tableProducts', { layout: 'layoutAdmin'});
// });


router.get('/:id', (req, res, next) => {
    let tableBillDetailController = require('../controllers/tableBillDetailController');
    tableBillDetailController
        .getById(req.params.id)
        .then(data => {
            res.locals.bill = data;
            res.render('tableBillDetail', { layout: 'layoutAdmin'});
        })
        .catch(error => next(error));
});

module.exports = router;
