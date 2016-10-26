'use strict';

//var config = require('../scripts/config.js');
var cradle = require('cradle');

var couch = require('../scripts/db.js');

//var docs = require('./docs.js');


couch.exists(function (err, exists) {
    if (err) {
        console.log('error', err);
    } else if (exists) {
        console.log('Database exists ....');
        console.log('Destroying database ....')

        //drop db  
        couch.destroy(function (err, response) {
            if (err != null) {
                console.log('Could not drop database......');

            } else {
                console.log('Database succesfully dropped......');
                couch.create(createDbCallback);
                //populatedb();
            }
        });
    } else {
        console.log('Database does not exist......');
        couch.create(createDbCallback);
        //populatedb();
        /* populate design documents */
    }
});


function populatedb() {

    console.log('Populating database......');
    //couch.save(docs, docsaveCallback);
    ////added line
    //console.log('saving design docs');
    //couch.database.save(docs.designdocs, function (err, res) {
    //    if (err)
    //        console.log(err);
    //    return;
    //    console.log(res);
    //});



};

function docsaveCallback(err, response) {
    if (err != null) {
        console.log('Error creating documents ' + JSON.stringify(err));
    } else {
        console.log('Documents successfully created.....');
    }
};

function createDbCallback(err, response) {
    if (err != null) {
        console.log('Error creating database ...' + JSON.stringify(err));
    }
    else {
        console.log('Database succesfully created.......');
    }

};