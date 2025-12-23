const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const authRoutes = require("./routes/auth");
const budgetRoutes = require("./routes/budget");
const categoryRoutes = require("./routes/category");
const summaryRoutes = require("./routes/summary");
const transactionRoutes = require("./routes/transaction");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:3000",
  "https://budget-tracker-opal-one.vercel.app",
  "https://student-finance-insights-upz8.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("CORS not allowed"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options(/.*/, cors());

// Health check route
app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({
    status: "ok",
    message: "Server is healthy 🚀",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/summary", summaryRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/users", userRoutes);

//404 Not Found Middleware
app.use((req, res, next) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ status: "error", message: ReasonPhrases.NOT_FOUND });
});

// Global error handler
app.use((err, req, res, next) => {
  // console.error(err.stack);

  res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: "error",
    message: err.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
  });
});

module.exports = app;
