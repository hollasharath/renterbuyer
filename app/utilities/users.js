var UserModel = require('../models/users');
var errors = require('./errors');
var Promise = require('bluebird');

class User {
    constructor(user) {
        var errors = this.validateUser(user);
        if(errors.length == 0) {
            this.details = user;
        } else {
            this.details = null;
            this.errors = errors;
        }
    }
    validateUser(user) {
        var errors = [];
        /*
            This is just generic validation.
            Ideally we should have separate error codes and custom validation for each values
            For example, phone number validation and email validation can surely be better
            We are currently not using the error anywhere
        */
        if(!user.firstname || user.firstname == '') {
            errors.push('Invalid first name');
        }
        if(!user.lastname || user.lastname == '') {
            errors.push('Invalid last name');
        }
        if(!user.email || user.email == '') {
            errors.push('Invalid email name');
        }
        if(!user.city || user.city == '') {
            errors.push('Invalid city name');
        }
        if(!user.address || user.address == '') {
            errors.push('Invalid address name');
        }
        if(!user.phone || user.phone == '') {
            errors.push('Invalid phone name');
        }
        //No validation done for social media
        return errors;
    }
}

module.exports.createUser = function (inputuser) {
    return new Promise(function (resolve, reject) {
        var user = new User(inputuser);
        if(user.details) {
            UserModel.create(user.details, function(err, userunit) {
                if(userunit) {
                    resolve(userunit)
                } else {
                    reject(err)
                }
            })
        } else {
            reject(user.errors);
        }
    })
}
module.exports.findUser = function (id) {
    return new Promise(function (resolve, reject) {
        UserModel.findOne({_id : id}, function(err, userunit) {
            if(userunit) {
                resolve(userunit)
            } else {
                reject(err)
            }
        })
    })
}
module.exports.findAllUsers = function () {
    return new Promise(function (resolve, reject) {
        UserModel.find(function(err, userunits) {
            if(userunits) {
                resolve(userunits)
            } else {
                reject(err)
            }
        })
    })
}