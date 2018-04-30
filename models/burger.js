module.exports = create function (app)
{
    var orm = require('./config/orm.js');
    orm.create(app);

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

    // tbd - add supprt for passing in by id and have orm return them (like i class)
}