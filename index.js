let express = require('express');
let app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

let expressHbs = require('express-handlebars');
let helper = require('./common/helper');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layouts',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    //create custom helper
    helpers: {
        when: function(operand_1, operator, openrand_2, options) {
            let operators = {                                    //  {{#when <operand1> 'eq' <operand2>}}
            'eq': (l,r) => l == r,                             //  {{/when}}
            'noteq': (l,r) => l != r,
            'gt': (l,r) => (+l) > (+r),                        // {{#when var1 'eq' var2}}
            'gteq': (l,r) => ((+l) > (+r)) || (l == r),        //               eq
            'lt': (l,r) => (+l) < (+r),                        // {{else when var1 'gt' var2}}
            'lteq': (l,r) => ((+l) < (+r)) || (l == r),        //               gt
            'or': (l,r) => l || r,                             // {{else}}
            'and': (l,r) => l && r,                            //               lt
            '%': (l,r) => (l % r) === 0                        // {{/when}}
            }
            let result = operators[operator](operand_1,operand_2);
            if(result) return options.fn(this); 
            return options.inverse(this); 
        },
        times: function(n, block) {
            var accum = '';
            for(var i = 0; i < n; ++i)
                accum += block.fn(i);
            return accum;
        },
        createStarList: helper.createStarList
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
// Body Parser
// let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Use cookie-parser

let cookieParser = require('cookie-parser');
app.use(cookieParser());

// Use Session
let session = require('express-session');
app.use(session({
    cookie: {httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 },
    secret: 'S3cret',
    resave: false,
    saveUninitialized: false
}));

// Use Cart Controller
let Cart = require('./controllers/cartController');
app.use((req, res, next) => {
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    req.session.cart = cart;
    res.locals.totalQuantity = cart.totalQuantity;
    next();
});


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// let cookieParser = require ('cookie-parser');
// app.use(cookieParser());

// let session = require('express-session');
// app.use(session({
//     cookie: {httpOnly: true, maxAge: null},
//     secret: 'S3cret',
//     resave: false,
//     saveUninitialized: false
// }));

app.use((req, res, next) =>{
    res.locals.email = req.session.user ? req.session.user.email : '';
    res.locals.username = req.session.user ? req.session.user.username: '';
    res.locals.isLoggedIn = req.session.user ? true : false;
    next();
    if (res.locals.email == "admin@gmail.com"){
        res.locals.isAdmin = true;
    } else
    res.locals.isAdmin = false;
});

app.use('/', require('./routes/indexRouter'));
app.use('/products', require('./routes/productRouter'));
app.use('/shop-detail', require('./routes/productDetailRouter'));
app.use('/users', require('./routes/userRouter'));
app.use('/cart', require('./routes/cartRouter'));
app.use('/tableProducts', require('./routes/tableProductRouter'));
app.use('/tableProductDetail', require('./routes/tableProductDetailRouter'));
app.use('/tableCategory', require('./routes/tableCategoryRouter'));
app.use('/tableBill', require('./routes/tableBillRouter'));
app.use('/tableBillDetail', require('./routes/tableBillDetailRouter'));
app.use('/checkout', require('./routes/checkoutRouter'));
app.use('/success', require('./routes/successRouter'));
app.use('/comments', require('./routes/commentRouter'));
app.use('/review', require('./routes/reviewRouter'));

app.get('/sync', (req, res) => {
    let models = require('./models');
    models.sequelize.sync()
    .then(()=>{
        res.send('Database sync completed');
    });
});

app.get('/admin', (req, res) => {
    res.render('admin', { layout: 'layoutAdmin'});
})

// app.get('/tableProducts', (req, res) => {
//     res.render('tableProducts', { layout: 'layoutAdmin'});
// })

// app.get('/tableProduct-Detail', (req, res) => {
//     res.render('tableProduct-Detail', { layout: 'layoutAdmin'});
// })

app.get('/:page', (req, res) => {
    let banners = {
        about: 'About us',
        shop: 'shop',
        cart: 'cart',
        checkout: 'checkout',
        contact_us: 'contact-us',
        gallery: 'gallery',
        my_account: 'my-account',
        shop_detail: 'shop-detail',
        wishlist: 'wishlist'
    };
    let page = req.params.page;
    res.render(page, { banner: banners[page]});    
})


app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});