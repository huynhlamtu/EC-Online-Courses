let express = require('express');
let app = express();

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

app.get('/', (req, res) => {
    res.render('index');
})

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