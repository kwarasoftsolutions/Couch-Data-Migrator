'use strict';
var couch = require('../scripts/db.js');

var CouchRepository = function () {

    this.getDocumentById = function (documentId, cb) {

        couch.get(documentId, function (err, doc) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, doc);
            }
        });

    },
    this.getDocumentView = function (view,cb) {
        couch.view(view, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        });
    },
     this.searchDocumentView = function (view,searchParams, cb) {
         couch.view(view,searchParams, function (err, res) {
             if (err) {
                 cb(err, null);
             } else {
                 cb(null, res);
             }
         });
     },
    this.addDocument = function(data,cb)
    {
        if(data._id)
        {
            couch.save(data._id, data, function (err, doc) {
                if(err){
                    cb(err, null);
                } else {
                    cb(null, doc);
                }
            });
        } else {
            couch.save(data, function (err, res) {
                if (err) {
                    cb(err, null);
                } else {
                    cb(null, res);
                }
            });
        }
    },
    this.updateDocument = function(documentId,data,cb)
    {
        couch.get(documentId, function (err, doc) {
            if (err) {
                cb(err, null);
            } else {
                
                var revId = doc.rev;
                couch.save(documentId, revId, data, function (err, res) {
                    if (err) {
                        cb(err, null);
                    } else {
                        cb(null, res);
                    }
                })
            }
        });
    },
    this.deleteDocument = function(documentId,cb)
    {
        couch.get(documentId, function (err, doc) {
            if (err) {
                cb(err, null);
            } else {

                var revId = doc.rev;
                couch.remove(documentId, revId,function (err, res) {
                    if (err) {
                        cb(err, null);
                    } else {
                        cb(null, res);
                    }
                })
            }
        });
    }
};


module.exports = CouchRepository;