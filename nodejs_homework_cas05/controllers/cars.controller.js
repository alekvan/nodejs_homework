const model = require("../models/cars.model");

function getCars(req, res) {
  res.render("cars/index", { model });
}

function createCarView(req, res) {
  res.render("cars/addCar");
}

function createCar(req, res) {
  model.push(req.body);
  res.redirect("/cars");
}

module.exports = {
  getCars,
  createCarView,
  createCar,
};
