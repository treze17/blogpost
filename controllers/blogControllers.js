const Blog = require("../models/blog");
//function to get the rappers views
const controller_func_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "All blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

//function to render the details to the views
const controller_func_details = (req, res) => {
  const uid = req.params.id;
  Blog.findById(uid)
    .then((result) => {
      res.render("blogs/details", { blogs: result, title: "Rapper Details" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Blog not found" });
    });
};
//function to render the create new rapper view
const controller_func_create = (req, res) => {
  res.render("blogs/create", { title: "create new blog" });
};
// function to post data into the db
const controller_func_post = (req, res) => {
  const newBlog = new Blog(req.body);

  newBlog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

//function to delete data frokm the db
const controller_func_delete = (req, res) => {
  const uid = req.params.id;

  Blog.findByIdAndDelete(uid)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  controller_func_index,
  controller_func_details,
  controller_func_create,
  controller_func_post,
  controller_func_delete,
};
