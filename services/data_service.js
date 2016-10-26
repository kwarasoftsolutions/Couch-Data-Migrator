'use strict';

var CouchRepository = require('../repository/couch_repository'),
    repository = new CouchRepository();

var DataService = function () {
    this.getById = function (documentId, cb) {
       return repository.getDocumentById(documentId, function (err, response) {
            if (err) {
                cb(err, null);
            }
            else {
                cb(null, response);
            }
        })
    },
    this.getAll = function (viewName, cb) {
        return repository.getDocumentView(viewName, function (err, response) {
            if (err) {
                cb(err, null);
            }
            else {
                cb(null, response);
            }
        })
    }
    ,
    this.create = function (data, cb) {

        return repository.addDocument(data, function (err, response) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, response);
            }
        });
    },
     this.update = function (documentId, data, cb) {
         return repository.updateDocument(documentId, data, function (err, response) {
             if (err) {
                 cb(err, null);
             } else {
                 cb(null, response);
             }
         });
     },
     this.delete = function (documentId, cb) {
         return repository.deleteDocument(documentId, function (err, response) {
             if (err) {
                 cb(err, null);
             } else {
                 cb(null, response);
             }
         });
     }
};

module.exports = DataService;

//var ds = new DataService();

//var newDoc = {album:'Key Change', artist:'Mocky Jazzist', releasedate: '12/22/2017' }

//ds.delete('3a7a9506c4b33a66c3adb0aa050029b5', function (err, resp) {

//    if (err) {
//        console.log(err);
//    } else {
//       // var doc = { id: resp._id, name: resp.name, email: resp.email };
//        // console.log(doc);
//        console.log(resp);
//    }
//});
