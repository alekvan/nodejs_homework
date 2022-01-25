const express = require("express");

const carsController = require("../controllers/cars.controller.js");

const carRouter = express.Router();

carRouter.get("/", carsController.getCars);
carRouter.get("/addCar", carsController.createCarView);
carRouter.post("/addCar", carsController.createCar);

module.exports = carRouter;
