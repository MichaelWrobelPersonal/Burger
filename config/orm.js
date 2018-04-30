module.exports = function create(app) {
  var db = require(connection.js);
  let connection = db.create();

  function initialAll() {
    // Use Handlebars to render the main index.html page with the burgers in it.
    app.get("/", function(req, res) {
      connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
          return res.status(500).end();
        }

        res.render("index", { plans: data });
      });
    });
  };

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
    
};