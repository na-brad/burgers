var connection = require("../config/connection.js");


var orm = {
    show: function(tableName, cb){
        var querystring = "SELECT * FROM " + tableName + ";";
        connection.query(querystring, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    add: function(tableName, cols, vals, cb){
        var querystring = "INSERT INTO " + tableName + " (" + cols + ") " + "VALUES ('" + vals + "')"
        console.log(querystring)
        connection.query(querystring, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    eat: function(tableName, cols, vals, id, cb){
        var querystring = "UPDATE " + tableName + " SET " + cols + " = " + vals + " WHERE id = " + id
        connection.query(querystring, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;