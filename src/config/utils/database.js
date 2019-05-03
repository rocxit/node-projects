'use strict'
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27018";
let _db;
const mongoConnect = () => {
    MongoClient.connect(url, {useNewUrlParser: true})
        .then(client => {
            console.log('connected');
            _db = client.db('test-hapi-mongo');
        }).catch(err => {
            throw err;
        });
}

const getDb = () =>{
    if (_db) return _db;
    throw 'No database found';
}

module.exports = {
    mongoConnect: mongoConnect,
    getDb: getDb
}
