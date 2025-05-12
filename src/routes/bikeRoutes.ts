import express from "express";
import {
  createBike,
  getBikesByCustomer,
  getBikeById,
} from "../controllers/bikeController";

const router = express.Router();

// POST - Create a new bike
router.post("/", createBike);

// GET - Get all bikes for a specific customer
router.get("/customer/:customerId", getBikesByCustomer);

// GET - Get a specific bike by bikeId
router.get("/:bikeId", getBikeById);

export default router;
