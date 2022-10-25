module.exports = app => {
    const User = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Room
    router.post("/", (request, response)=>{

    });
  
    // Retrieve all Aulas
    router.get("/", User.findAll);
  
    // Retrieve a single Room with id
    router.get("/:id", User.findOne);
  
    // Update a Room with id
    router.put("/:id", User.update);
  
    // Delete a Room with id
    router.delete("/:id", User.delete);
  
    app.use('/api/user', router);
  };