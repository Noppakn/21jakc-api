const express = require('express');
const cors = require('cors');

const app = express();

const index = require('./routes/index');
const jackRoute = require('./routes/jack.routes');
const masterRoute = require('./routes/_master');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(
    cors({
        origin: '*'
    })
);

app.use(index);
app.use('/api/', jackRoute);
app.use('/api/master', masterRoute)

module.exports = app;