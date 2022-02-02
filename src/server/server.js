const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require('cors');
const errorHandler = require("./middleware/error");

// load env variables
dotenv.config({ path: "./config/config.env" });

// DOT ENV variable
const PORT = process.env.PORT || 5000;

// Route Files
const hospitals = require("./routes/hospitals");
const doctors = require("./routes/doctors");
const patients = require("./routes/patients");
const users = require("./routes/auth");

// Connect to Database
connectDB();

const app = express();

// Body Parser
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Sanitize Data
app.use(mongoSanitize());

// Set Security headers
app.use(helmet());

// Prevent XSS Attacks
app.use(xss());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Mount Routers
app.use("/api/v1/hospitals", hospitals);
app.use("/api/v1/doctors", doctors);
app.use("/api/v1/patients", patients);
app.use("/api/vi/auth", users);

// Custom ErrorHandler
app.use(errorHandler);

// SERVER Listening
const server = app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);

// Handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close Server & Exit process
  server.close(() => process.exit(1));
});
