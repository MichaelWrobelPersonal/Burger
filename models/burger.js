//module.exports = create function (app)

    var orm = require('./config/orm.js');
//    orm.create(app);
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(fields, vals, cb) {
        orm.create("burgers", fields, vals, function(res) {
          cb(res);
        });
    },
    read: function(id, cb) {
        orm.read("burgers", id, function(res) {
          cb(res);
        });
    },
    update: function(id, field, val, cb) {
        orm.update("burgers", field, val, function(res) {
          cb(res);
        }); 
    },
    delete: function(id, cb) {
        ord.delete("burgers", id, function(res) {
          cb(res);
        });
    }
};
/*
    function initializeBurgers() {
        initializeAll( table: burgers);
    };

    function selectAllBurgers() {
        selectAll(table: burgers);
    };

    function insertBurger( burger ) {
        insertOne( table: burgers, value: burger)
    };

    function updateBurger( burger ) {
        insertOne( table: burgers, value: burger)
    };

    function deleteBurger( ) {
        insertOne( table: burgers)
    };
*/
    // tbd - add supprt for passing in by id and have orm return them (like i class)
module.exports = burger;