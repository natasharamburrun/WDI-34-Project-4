const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./lib/errorHandler');

const routes = require('./config/routes');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

app.use(express.static(`${__dirname}/public`));

const { dbURI, port } = require('./config/environment');
mongoose.connect(dbURI);

// app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(bodyParser.json());

app.use('/api', routes);

app.use(errorHandler);

app.listen(port, () => console.log(`Express running on port ${port}`));

module.exports = app;
