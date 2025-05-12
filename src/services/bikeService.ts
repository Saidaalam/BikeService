import prisma from "../../prisma/clients";

// Create a new bike
export const createBikeService = async (data: {
  brand: string;
  model: string;
  year: number;
  customerId: string;
}) => {
  return prisma.bike.create({ data });
};

// Get all bikes for a specific customer
export const getBikesByCustomerService = async (customerId: string) => {
  return prisma.bike.findMany({
    where: { customerId },
    include: { services: true }, 
  });
};

// Get a specific bike by bikeId
export const getBikeByIdService = async (bikeId: string) => {
  return prisma.bike.findUnique({
    where: { bikeId },
    include: { services: true },  
  });
};
