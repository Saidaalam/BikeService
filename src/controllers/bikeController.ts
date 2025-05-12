import { Request, Response } from "express";
import {
  createBikeService,
  getBikesByCustomerService,
  getBikeByIdService,
} from "../services/bikeService";

// Create a new bike
export const createBike = async (req: Request, res: Response) => {
  try {
    const bike = await createBikeService(req.body);
    res.status(201).json(bike);
  } catch (error) {
    res.status(500).json({ error: "Failed to create bike" });
  }
};

// Get all bikes for a specific customer
export const getBikesByCustomer = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  try {
    const bikes = await getBikesByCustomerService(customerId);
    if (bikes.length > 0) {
      res.json(bikes);
    } else {
      res.status(404).json({ error: "No bikes found for this customer" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bikes" });
  }
};

// Get a specific bike by bikeId
export const getBikeById = async (req: Request, res: Response) => {
  const { bikeId } = req.params;
  try {
    const bike = await getBikeByIdService(bikeId);
    if (bike) {
      res.json(bike);
    } else {
      res.status(404).json({ error: "Bike not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bike" });
  }
};
