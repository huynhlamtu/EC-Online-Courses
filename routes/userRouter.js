let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

var paypal = require ('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'Af8rSKXgAdjuMQPPP6lqhZQVV4iMS5beECK30w3yGEmHWF8sBFYXQJpWBmPrGFRfVgf3LBSd_9gb5lrY',
    'client_secret': 'ECdiiKsVMWoFJbDw3cETU1OB3AOQrndgoZlNUHOThzqnq6ToNl9h9crbmuW9otOZQ3shjjDYnahSWZru'
});


router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res, next) =>{
    let email = req.body.email;
    let password = req.body.password;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined);
    userController
        .getUserByEmail(email)
        .then(user => {
            if (user) {
                if (userController.comparePassword(password, user.password))
                {
                    req.session.cookie.maxAge = keepLoggedIn? 30*60*24*60*100:null;
                    req.session.user = user;
                    res.redirect('/');
                } else {
                    res.render('login', {
                        message: 'Incorrect password',
                        type :'alert-danger'
                    });
                }
            } else {
                res.render ('login', {
                    message: 'Email has not registered yet!',
                    type: 'alert-danger'
                });
            }
        });
});


router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res, next) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    
    let confirmPassword = req.body.password2;
    if (username == "" || email == ""|| password == ""){
        return res.render('register', {
            message: 'Please fill in the form!',
            type: 'alert-danger'
        });
    }
    //Kiem tra 2 password co giong nhau hay khong
    if (confirmPassword != password){
        return res.render('register', {
            message: 'Confirm password does not match!',
            type: 'alert-danger'
        });
    }
    //Kiem tra email chua ton tai
    userController
        .getUserByEmail(email)
        .then(user => {
            if (user) {
                return res.render('register', {
                    message: 'Your email existed!',
                    type: 'alert-danger'
                });
            }
            user = {
                username,
                email,
                password
            }
            // tao tai khoan
            return userController
                .createUser(user)
                .then(user => {
                    res.render('login', {
                        message: 'You have registered, please login!',
                        type: 'alert-primary'
                    });
                })
                .catch(error => next (error));
        });
})

router.get('/logout', (req, res, next) =>{
    req.session.destroy (error =>{
        if (error){
            return next(error);
        }
        return res.redirect('login');
    });
});

var totalPrice;

router.get('/pay', (req, res) => {  
    var cart = req.session.cart;
    res.locals.cart = cart.getCart(); 
    totalPrice = String(Math.round(res.locals.cart.totalPrice/230)/100);
    console.log("TOTAL PRICE: ", String(totalPrice));

    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:5000/users/payment-succeeded",
            "cancel_url": "http://localhost:5000/users/payment-canceled"
        },
        "transactions": [{
            
            "amount": {
              "currency": "USD",
              "total": totalPrice
            },
            "description": "Courses to test"
        }]
    };


    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i = 0;i < payment.links.length;i++){
                if(payment.links[i].rel === 'approval_url'){
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });    
});

router.get('/payment-succeeded', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": totalPrice
            }
        }]
    };
    
    successController = require('../controllers/successController')
    for (const id in req.session.cart.items) {
        successController.updateProduct(id);
    }
    req.session.cart.empty();

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.render('success');
        }
    });
});


router.get('/payment-canceled', (req, res) => res.render('cancel'));

router.get('/editAccount', (req, res) => {
    res.render('editAccount');
});
  
router.post('/editAccount', (req, res, next) => {
    let email= req.body.email;
    let username = req.body.username;
    let fullname = req.body.fullname;
    let password = req.body.password;
    
    let confirmPassword = req.body.password2;
    if (username == "" || fullname == ""|| password == ""){
        return res.render('editAccount', {
            message: 'Please fill in the form!',
            type: 'alert-danger'
        });
    }
    //Kiem tra 2 password co giong nhau hay khong
    if (confirmPassword != password){
        return res.render('editAccount', {
            message: 'Confirm password does not match!',
            type: 'alert-danger'
        });
    }
    userController
    .getUserByEmail(email)
    .then(user => {
        user = {
            email,
            username,
            fullname,
            password
        }
        // Thay doi thong tin 
        return userController
            .editUser(user)
            .then(user => {
                res.render('editAccount', {
                    message: 'You have change your information success',
                    type: 'alert-primary'
                });
            })
            .catch(error => next (error));
    });
    
})


module.exports = router;