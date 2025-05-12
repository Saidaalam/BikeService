import express from "express";
import {
  createService,
  getAllServices,
  getServiceById,
  markServiceAsCompleted,
  getPendingOrOverdueServices,
} from "../controllers/serviceController";

const router = express.Router();

// POST - Create a service record
router.post("/", createService);

// GET - Get all service records
router.get("/", getAllServices);

// GET - Get a specific service record by serviceId
router.get("/:serviceId", getServiceById);

// PUT - Mark a service as completed
router.put("/:serviceId/complete", markServiceAsCompleted);

// GET - Get pending or overdue services (older than 7 days)
router.get("/status", getPendingOrOverdueServices);

export default router;
