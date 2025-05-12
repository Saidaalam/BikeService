import express from "express";
import customerRoutes from "./routes/customerRoutes";
import bikeRoutes from "./routes/bikeRoutes";
import serviceRoutes from "./routes/serviceRoutes";

const app = express();
app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/bikes", bikeRoutes);
app.use("/api/services", serviceRoutes);

export default app;