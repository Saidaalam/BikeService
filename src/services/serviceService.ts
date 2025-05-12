import prisma from "../../prisma/clients";

// Create a new service record
export const createServiceService = async (data: {
  bikeId: string;
  serviceDate: Date;
  description: string;
  status: string;
}) => {
  return prisma.serviceRecord.create({
    data,
  });
};

// Get all service records
export const getAllServicesService = async () => {
  return prisma.serviceRecord.findMany();
};

// Get a specific service record by serviceId
export const getServiceByIdService = async (serviceId: string) => {
  return prisma.serviceRecord.findUnique({
    where: { serviceId },
  });
};

// Mark a service as completed
export const markServiceAsCompletedService = async (
  serviceId: string,
  completionDate: Date | null
) => {
  return prisma.serviceRecord.update({
    where: { serviceId },
    data: {
      status: "done",
      completionDate,
    },
  });
};

// Get services with pending or overdue status
export const getPendingOrOverdueServicesService = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  return prisma.serviceRecord.findMany({
    where: {
      OR: [
        { status: "pending" },
        { status: "in-progress" },
      ],
      serviceDate: {
        lt: sevenDaysAgo,
      },
    },
  });
};
