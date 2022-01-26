const express = require("express");

const carsController = require("../controllers/cars.controller.js");

const carRouter = express.Router();

carRouter.get("/", carsController.getCars);
carRouter.get("/add", carsController.createCarView);
carRouter.post("/add", carsController.createCar);
carRouter.get("/:carColor", carsController.filterColorCars);

module.exports = carRouter;
