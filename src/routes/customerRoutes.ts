import express from "express";
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customerController";

const router = express.Router();

// POST - Create a customer
router.post("/", createCustomer);

// GET - Get all customers
router.get("/", getAllCustomers);

// GET - Get a specific customer by ID
router.get("/:customerId", getCustomerById);

// PUT - Update a specific customer by ID
router.put("/:customerId", updateCustomer);

// DELETE - Delete a specific customer by ID
router.delete("/:customerId", deleteCustomer);

export default router;
