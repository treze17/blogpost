const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const { render } = require("ejs");
const blogRoutes = require("./routes/blogRoutes");

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

//morgan middleware
app.use(morgan("dev"));

//static files && middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//Example of middleware
// app.use((req, res, next) => {
//   console.log("new middleware name");
//   console.log("host", req.hostname);
//   console.log("path", req.path);
//   console.log("method", req.method);
//   next();
// });

app.get("/", (req, res) => {
  //res.send("<p>Home PAge</p>");
  //res.sendFile("./views/index.html", { root: __dirname });
  res.redirect("/blogs");
  // const blogs = [
  //   { name: "21 Savage", age: 28, city: "LA" },
  //   { name: "Chance tha rarpper", age: 30, city: "Illinois" },
  //   { name: "Lik KIm", age: 20, city: "NY" },
  // ];
  // res.render("index", { title: "Home", blogs: blogs });
});

//blog routes: outputting from db to views

app.get("/about", (req, res) => {
  //res.send("<p>Home PAge</p>");
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});
//

// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });
//blog Routes
app.use("/blogs", blogRoutes);

app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404 page" });
});
