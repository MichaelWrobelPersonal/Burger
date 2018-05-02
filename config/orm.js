module.exports = function create(app) {
  var db = require("../config/connection.js");
//  let connection = db.create();

  // tbd change to use 'table' instead og burgers
  var orm = {
  
   initial: function(tableInput, cb) {
    // Use Handlebars to render the main index.html page with the burgers in it.
      var queryString = "SELECT * FROM " + tableInput + ";";  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, fields, vals, cb) {
      var queryString = "INSERT INTO " = table + "(" + fields + ")" +  " VALUES (" + vals + ")";

//      var queryString = "INSERT INTO " + table;
  
//      queryString += " (";
//      queryString += cols.toString();
//      queryString += ") ";
//      queryString += "VALUES (";
//      queryString += printQuestionMarks(vals.length);
//      queryString += ") ";
//  // TBD - simplify to just the vars needed above

      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, id, field, condition, cb) {
     var queryString = "UPDATE " + table + " SET " + devoured + " = " + condition + " WHERE id = " + id;

//      var queryString = "UPDATE " + table;
  
//    queryString += " SET ";
//      queryString += objToSql(objColVals);
//      queryString += " WHERE ";
//      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  /*
  function selectAll() {
    // Retrieve all burgers
    app.get("/burgers", function(req, res) {
      connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
          return res.status(500).end();
        }
  
        res.json(data);
      });
    }); 
  };

  function insertOne() {
    // Create a new burger
    app.post("/burgers", function(req, res) {
      connection.query("INSERT INTO burgers (plan) VALUES (?)", [req.body.plan], function(err, result) {
        if (err) {
          return res.status(500).end();
        }
  
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
      });
    });
  };

  function updateOne() {
    // Update a burger
     app.put("/todos/:id", function(req, res) {
       connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
          if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
          }
          else if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
        });
     });
  };


  function deleteOne() {
    // Delete a burger
    app.delete("/burger/:id", function(req, res) {
      connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
        if (err) {
          // If an error occurred, send a generic server failure
          return res.status(500).end();
        }
        else if (result.affectedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      });
    });
  };
*/
}};