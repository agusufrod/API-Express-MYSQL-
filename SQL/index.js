require('dotenv').config();
const express = require('express');
const app = express();
const mainRouter = require('./src/route/index');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// app.use((req, res, next) => {
//   res.json({
//     status: 200,
//     message: 'Welcome To Express v2',
//   });
// });
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', mainRouter);

module.exports = app;
