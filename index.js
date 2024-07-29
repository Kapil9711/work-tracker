import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
const app = express();

//getting __dirname in es6
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
global.__dirname = __dirname;
// corrs setup for localhost5173
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,DELETE,POST",
    credentials: true, // for cookies
  })
);
// app.use(cors());

//setting public routes
app.use(express.static(path.join(__dirname, "public")));

// File imports
import connectDB from "./utils/db.js";
import errors from "./utils/errors.js";
import ErrorHandler from "./utils/errorHandler.js";

// Route files
import userRoutes from "./routes/userRoute.js";
import taskRoutes from "./routes/taskRoute.js";

const PORT = process.env.PORT || 8000;
const mode = process.env.NODE_ENV || "development";

// Handling ReferenceError globally
process.on("uncaughtException", (err) => {
  console.log({ msg: "aborting server due to uncaught Exception", error: err });
  process.exit(1);
});

// view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Global inbuilt middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Home route
// app.get("/", (req, res) => {
//   res.send("server is working fine make your query at '/api/v1");
// });

//file
app.get("/file", (req, res) => {
  res.render("index");
});

// Custom routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", taskRoutes);

// Handling unmatched routes
app.all("*", (req, res, next) => {
  // return next(new ErrorHandler(`Route ${req.originalUrl} not found`, 404));
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Global middleware for handling errors
app.use(errors);

// Establishing connection and starting server
const start = async () => {
  try {
    // Once mongodb connection is established, then only the server will run
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT} in ${mode} mode`);
    });
  } catch (error) {
    console.log("aborting server due to some error connecting to mongodb");
  }
};

start();
