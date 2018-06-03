const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const DB_NAME = 'mycities';
const url = 'mongodb://mongo:27017';

router.post('/', function(req, res) {
    let search = req.body.search;
    let pattern = new RegExp(`^${search}`, 'i');
    let obj = {City: {$regex: pattern}};

    MongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("Unable to connect", err);
        } else {

            let db = client.db(DB_NAME);

            let collection = db.collection('cities');

            collection.find(obj, { useNewUrlParser: true}).toArray(function (err, result) {
                if (err) {
                    res.send(err);
                }
                if (result.length) {
                    res.send(result);
                }
                client.close();
            });
        }
    });
});

module.exports = router;
