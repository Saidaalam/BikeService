import prisma from "../../prisma/clients";

// Create a new customer
export const createCustomerService = async (data: {
  name: string;
  email: string;
  phone: string;
}) => {
  return prisma.customer.create({ data });
};

// Get all customers
export const getAllCustomersService = async () => {
  return prisma.customer.findMany({ include: { bikes: true } });
};

// Get a customer by their unique customerId
export const getCustomerByIdService = async (customerId: string) => {
  return prisma.customer.findUnique({
    where: { customerId },  // Use customerId instead of id
    include: { bikes: true },
  });
};

// Update a customer's data by customerId
export const updateCustomerService = async (customerId: string, data: { name?: string; email?: string; phone?: string }) => {
  return prisma.customer.update({
    where: { customerId },
    data,
  });
};

// Delete a customer by customerId
export const deleteCustomerService = async (customerId: string) => {
  return prisma.customer.delete({
    where: { customerId },
  });
};
