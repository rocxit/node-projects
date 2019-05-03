'use strict'
const userModel = require('../../models/userModel');
const queries = require('../../config/mongoQuery/queries')

const create = (req, resp) => {
    const user = new userModel(req.payload.name ,req.payload.email, req.payload.password);
    queries.save('users', user).then((result) => {
        resp(result.ops);
    }).catch((err) => {
        resp(`Error ${err}`)
        console.log('error hai bhai')
    });
}

const find = (req ,resp) => {
    queries.find('users').then((result) => {
        resp(result)
    }).catch((err) => {
        console.log(err)
    });
}

const findById = (req, resp) => {
    var id = req.payload.id
    // if(!ObjectID.isValid(id)){
    //     return resp("invalid ID")
    // }
        queries.findById('users', id.toString()).then((result) => {
            if(result){
                resp(result)
            }
            return resp('invalid id')
        }).catch((err) => {
            resp('errorrrrr' + err)
        });
}
const updateUser = (req, resp) => {
    var id = req.payload.id
    // const user = new userModel(req.payload.name ,req.payload.email, req.payload.password);
    queries.updateUser('users', id, req.payload.name).then((result) => {
        resp(result);
    }).catch((err) => {
        resp(err)
    });
}
const userRoute = [
    {
        method: 'POST',
        path: '/user',
        handler: create
    },
    {
        method: 'GET',
        path: '/users',
        handler: find
    },
    {
        method: 'POST',
        path: '/userId',
        handler: findById
    },
    {
        method : 'POST',
        path: '/updateUser',
        handler: updateUser
    }
]

module.exports = userRoute