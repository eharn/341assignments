const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views'); // views is the default


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'})});

app.listen(3000);


// // const http = require('http');

// // const routes = require('./routes');
// const express = require('express');
// const app = express();

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const bodyParser = require('body-parser');

// // app.use((req, res, next) => {
// //     console.log('In the middleware!');
// //     next(); // allows req to coninue to the next middlware in line
// // });

// app.use(adminRoutes);
// app.use(shopRoutes);

// app.use(bodyParser.urlencoded({extended: false}));

// // app.use('/',(req, res, next) => {
// //     console.log('This always runs');
// //     next();
// // });

// // app.use('/add-product',(req, res, next) => {
// //     console.log('In another middleware!');
// //     res.send('<h1>Add product page</h1>'); //automatcially sets the type to html
// //     //never want to add next as it should route somewhere else and we don't want to move it on
// // });




// // const server = http.createServer(app);

// app.listen(3000);
