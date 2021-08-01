var Promise = require('bluebird');
var join = Promise.join;
var async = require('async');
var User = require('../utilities/users');

module.exports = function(app) {
    app.post('/api/createuser', function(req, res) {
        join(User.createUser(req.body.user), function(user) {
            res.send(user)
        })
    })
    app.post('/api/printsingleuser', function(req, res) {
        join(User.findUser(req.body.id), function(user) {
            res.send(user)
        })
    })
    app.post('/api/printallusers', function(req, res) {
        join(User.findAllUsers(), function(users) {
            res.send(users)
        })
    })
}