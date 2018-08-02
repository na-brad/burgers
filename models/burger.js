var orm = require("../config/orm.js");

var burger = {
    show: function(cb){
        orm.show("burgers", function(res){
            cb(res);
        });
    },
    add: function(vals,cb){
        orm.add("burgers", "burger_name", vals, function(res){
            cb(res);
        });
    },
    eat: function(id, cb){
        orm.eat("burgers", "devoured", 1, id, function(res){
            cb(res);
        });
    }
}

module.exports = burger;