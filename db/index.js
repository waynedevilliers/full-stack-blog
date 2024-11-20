import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

// Initialize Sequelize with the connection string
const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: "postgres",
  logging: false, // Disable logging (optional)
});

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

export default sequelize;
