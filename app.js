/*this is the main js to start*/
/*nodemon app.js to start the server and it is in port 5050*/

/*all the images are found under img file*/

const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();
const port = process.env.PORT || 5050;

require('dotenv').config();

/*app.use*/
app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

/*app.set*/
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const route = require('./server/routes/recipeRoutes.js')
app.use('/', route);

/*listens to the app*/
app.listen(port, ()=> console.log(`Port ${port} is listening now`));