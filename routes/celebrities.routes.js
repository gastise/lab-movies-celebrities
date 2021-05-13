const express = require("express");
const router = express.Router();

const CelebrityModel = require("./../models/celebrity.model");


router.get("/new", (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs");
});

router.post("/create", (req, res, next) => {
    const newCelebrity = { ...req.body };
    console.log("hola");
console.log(newCelebrity);

    CelebrityModel.create(newCelebrity)
    .then((dbResult) => {
      res.redirect("/celebrities");
    })
    .catch(next) 
  });


module.exports = router;