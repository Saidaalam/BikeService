import { Request, Response } from "express";
import {
  createServiceService,
  getAllServicesService,
  getServiceByIdService,
  markServiceAsCompletedService,
  getPendingOrOverdueServicesService,
} from "../services/serviceService";

// Create a new service record
export const createService = async (req: Request, res: Response) => {
  try {
    const service = await createServiceService(req.body);
    res.status(201).json({
      success: true,
      message: "Service record created successfully",
      data: service,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: "Failed to create service record",
        stack: error.stack,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "An unknown error occurred while creating service record",
      });
    }
  }
};

// Get all service records
export const getAllServices = async (_req: Request, res: Response) => {
  try {
    const services = await getAllServicesService();
    res.status(200).json({
      success: true,
      message: "Service records fetched successfully",
      data: services,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch service records",
        stack: error.stack,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "An unknown error occurred while fetching service records",
      });
    }
  }
};

// Get a specific service record by serviceId
export const getServiceById = async (req: Request, res: Response) => {
  const { serviceId } = req.params;
  try {
    const service = await getServiceByIdService(serviceId);
    if (service) {
      res.status(200).json({
        success: true,
        message: "Service record fetched successfully",
        data: service,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Service record not found",
      });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch service record",
        stack: error.stack,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "An unknown error occurred while fetching service record",
      });
    }
  }
};

// Mark a service as completed
export const markServiceAsCompleted = async (req: Request, res: Response) => {
  const { serviceId } = req.params;
  const { completionDate } = req.body;

  try {
    const completedService = await markServiceAsCompletedService(
      serviceId,
      completionDate || new Date()
    );
    res.status(200).json({
      success: true,
      message: "Service marked as completed",
      data: completedService,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: "Failed to mark service as completed",
        stack: error.stack,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "An unknown error occurred while marking service as completed",
      });
    }
  }
};

// Get pending or overdue services (older than 7 days)
export const getPendingOrOverdueServices = async (_req: Request, res: Response) => {
  try {
    const services = await getPendingOrOverdueServicesService();
    res.status(200).json({
      success: true,
      message: "Overdue or pending services fetched successfully",
      data: services,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch overdue or pending services",
        stack: error.stack,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "An unknown error occurred while fetching overdue or pending services",
      });
    }
  }
};
