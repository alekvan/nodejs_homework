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

function filterCarsByColor(req, res) {
  const filteredCars = model.filter((color) => {
    return color.carColor.toLowerCase() == req.params.carColor.toLowerCase();
  });
  res.render("cars/filterCarColor", { filteredCars });
}

module.exports = {
  getCars,
  createCarView,
  createCar,
  filterCarsByColor,
};
