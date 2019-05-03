'use strict'
const getDb = require('../utils/database').getDb;
const ObjectID = require('mongodb').ObjectID
const Buffer = require('safe-buffer').Buffer
const save = (collection, model) => {
    let db = getDb();
    // db.collection(collection).createIndex( { "name": 1}, { unique: true, partialFilterExpression: {name: {$type: "string"}} } )
    db.collection(collection).createIndex( { "vehical.vNumber": 1}, { unique: true } )
    return db.collection(collection).insertOne(model)
}
const find = (collection) => {
    let db = getDb();
    return db.collection(collection).find().toArray();
}
const addVehical = (collection, id, vehical) => {
    let db = getDb();
    return db.collection(collection).updateOne(
        {_id: new ObjectID(Buffer.from(id, 'hex'))}, { $set: {vehical: vehical}})
}
const findById =(collection, id) => {
    let db = getDb();
    return new Promise((resolve, reject) => {
        if(!ObjectID.isValid(id)){
            reject("invalid ID")
    }
        resolve(db.collection(collection).findOne(
            { _id : ObjectID(Buffer.from(id, 'hex')) }
        ))
    })
}
const updateUser =(collection, id, name) => {
    let db = getDb();
    return db.collection(collection).updateOne(
        { name: id}, { $set: {name: name}}
    )
}
module.exports = {
    save: save,
    find: find,
    addVehical: addVehical,
    findById: findById,
    updateUser: updateUser
}