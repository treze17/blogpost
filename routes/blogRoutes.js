const express = require("express");
const router = express.Router();
const blogscontrollers = require("../controllers/blogControllers");

//blog routes : outputting from db to views
router.get("/", blogscontrollers.controller_func_index);

//post request to send data into the db
router.post("/", blogscontrollers.controller_func_post);

//create a new blog of rappers
router.get("/create", blogscontrollers.controller_func_create);

router.get("/:id", blogscontrollers.controller_func_details);

//Delete handler
router.delete("/:id", blogscontrollers.controller_func_delete);

module.exports = router;
