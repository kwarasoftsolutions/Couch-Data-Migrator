'use strict';
var config = require('./config.js');
var cradle = require('cradle');
var db = null;


db = new (cradle.Connection)(config.database.dev.host, config.database.dev.port, {
    auth: { username: config.database.dev.username, password: config.database.dev.password }
}).database(config.database.dev.schema);

module.exports = db;

