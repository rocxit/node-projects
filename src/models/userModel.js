'use strict'
const Vehical = require('../models/vehicalModel')
class User {
    constructor(name, email, password, vehical) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.vehical = vehical || [] ;
    }
}

module.exports = User