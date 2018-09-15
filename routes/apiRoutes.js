var db = require("../models");

module.exports = function (app) {


  // Get route for retrieving a single post
  app.get("/api/orders/:name", function(req, res) {
    db.Info.findOne({
      where: {
        name: req.params.name
      }
    })
      .then(function(dbInfo) {
        res.json(dbInfo);
      });
  }); 
//Delete
  app.delete("/api/orders/:name", function(req, res) {
    db.Info.destroy({
      where: {
        name: req.params.name
      }
    })
      .then(function(dbInfo) {
        res.json(dbInfo);
      });
  });

  // Get all examples

  app.get("/api/sandwiches", function (req, res) {
    db.Sandwich.findAll({}).then(function (dbSandwich) {
      res.json(dbSandwich);
    });
  });

  // Create a new example
  app.post("/api/sandwiches", function (req, res) {
    db.Sandwich.create(req.body).then(function (dbSandWich) {
      res.json(dbSandWich);
    });
  });

  app.get("/api/sides", function (req, res) {
    db.Side.findAll({}).then(function (dbSide) {
      res.json(dbSide);
    });
  });

  // Create a new example
  app.post("/api/sides", function (req, res) {
    db.Side.create(req.body).then(function (dbSide) {
      res.json(dbSide);
    });
  });


  app.get("/api/drinks", function (req, res) {
    db.Drink.findAll({}).then(function (dbDrink) {
      res.json(dbDrink);
    });
  });

  // Create a new example
  app.post("/api/drinks", function (req, res) {
    db.Drink.create(req.body).then(function (dbDrink) {
      res.json(dbDrink);
    });
  });

  app.get("/api/info", function (req, res) {
    db.Info.findAll({}).then(function (dbInfo) {
      res.json(dbInfo);
    });
  });

  // Create a new example
  app.post("/api/info", function (req, res) {
    db.Info.create(req.body).then(function (dbInfo) {
      res.json(dbInfo);
    });
  });

  app.get("/api/total", function (req, res) {
    db.Total.findAll({}).then(function (dbTotal) {
      res.json(dbTotal);
    });
  });

  // Create a new example
  app.post("/api/total", function (req, res) {
    db.Total.create(req.body).then(function (dbTotal) {
      res.json(dbTotal);
    });
  });

  app.get("/api/orders", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Info.findAll({
      include: [{ all: true }]
    }).then(function(Info) {
      const resObj = Info.map(function(customer){
        //tidy up the info data
        return Object.assign(
          {},
          {
            orderid: customer.orderid,
            ordered_at: customer.order,
            name: customer.name,
            building: customer.building,
            room_number: customer.room,
            details: customer.details,
            total: customer.Totals.map(function(Totals){
              //tidy up the post data
              return Object.assign(
                
                
                  Totals.total
            )
          }),
            sandwiches: customer.Sandwiches.map(function(Sandwiches){
              //tidy up the post data
              return Object.assign(
                {},
                {
                  type: Sandwiches.type,
                  bread: Sandwiches.bread,
                  veggies: Sandwiches.veggies,
                  condiments: Sandwiches.condiments
            })
           }),
            sides: customer.Sides.map(function(Sides){
              //tidy up the post data
              return Object.assign(
                
                
                  Sides.sides
            )
          }),
            drinks: customer.Drinks.map(function(Drinks){
              //tidy up the post data
              return Object.assign(
               
                
                  Drinks.drinks
          )
         })
        }
        )
        
      })
    
    // }).then(function (all) {
    //   res.json(all);
    // });

    
    res.json(resObj)

    })

    });
};
