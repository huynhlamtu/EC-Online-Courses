let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

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
module.exports = router;