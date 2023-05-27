const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./modules/blog");

//express app
const app = express();
const PORT = 300;
//connectiontion to mongodb
const dbURI =
  "mongodb+srv://ishaq:test1234@blogdb.uqfwkcl.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => {
    if (result) {
      //console.log("connected to the db");
      serv;
    }
  })
  .catch((err) => {
    console.log(err);
  });

//register view engine
app.set("view engine", "ejs");
//listen for request
const serv = app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("succes connected to db");
});
//mongoose and mongo sandbox routes
app.use("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "New Blog2",
    snippet: "about my new Blog",
    body: "more about my new blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//getting all records in the db
app.use("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("err");
    });
});

app.use("/single-blog", (req, res) => {
  Blog.findById("6469fdf25f65dfb925e04fd1")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
