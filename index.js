let express = require('express');
let app = express();
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));

let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layouts',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let cookieParser = require ('cookie-parser');
app.use(cookieParser());

let session = require('express-session');
app.use(session({
    cookie: {httpOnly: true, maxAge: null},
    secret: 'S3cret',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) =>{
    res.locals.email = req.session.user ? req.session.user.email : '';
    res.locals.username = req.session.user ? req.session.user.username: '';
    res.locals.isLoggedIn = req.session.user ? true : false;
    next();
});

app.use('/', require('./routes/indexRouter'));
app.use('/products', require('./routes/productRouter'));
app.use('/shop-detail', require('./routes/productDetailRouter'));
app.use('/users', require('./routes/userRouter'));

app.get('/sync', (req, res) => {
    let models = require('./models');
    models.sequelize.sync()
    .then(()=>{
        res.send('Database sync completed');
    });
});

app.get('/:page', (req, res) => {
    let page = req.params.page;
    res.render(page);    
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});