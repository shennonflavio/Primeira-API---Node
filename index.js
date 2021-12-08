const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./config/routes');
const app = express();

const route = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);



app.listen(route, () => {
    console.log(`Express started at http://localhost:3000`);
})