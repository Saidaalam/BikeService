import { Request, Response } from "express";
import {
  createCustomerService,
  getAllCustomersService,
  getCustomerByIdService,
  updateCustomerService,
  deleteCustomerService,
} from "../services/customerService";

// Create a new customer
export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await createCustomerService(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: "Failed to create customer" });
  }
};

// Get all customers
export const getAllCustomers = async (_req: Request, res: Response) => {
  try {
    const customers = await getAllCustomersService();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch customers" });
  }
};

// Get a customer by customerId
export const getCustomerById = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  try {
    const customer = await getCustomerByIdService(customerId);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch customer" });
  }
};

// Update a customer by customerId
export const updateCustomer = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  const data = req.body;
  try {
    const updatedCustomer = await updateCustomerService(customerId, data);
    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ error: "Failed to update customer" });
  }
};

// Delete a customer by customerId
export const deleteCustomer = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  try {
    const deletedCustomer = await deleteCustomerService(customerId);
    res.json(deletedCustomer);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete customer" });
  }
};
