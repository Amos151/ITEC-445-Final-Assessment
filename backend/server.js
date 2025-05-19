import express from "express";
import cors from "cors";
import 'dotenv/config';
import mongoose from "mongoose";
import articleRouter from "./routes/articles.js";
import session from "express-session";
import passport from "passport";
import authRouter from "./routes/auth.js";
import "./auth.js";

const port = process.env["PORT"];
const allowedOrigins = [process.env.CLIENT_URL];

// middleware
const app = express();
app.use(express.json());
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
})); // Enable CORS for all routes


//  Sessions
app.use(session({
  secret:            process.env.SESSION_SECRET,
  resave:            false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure:   false,               // set true if using HTTPS
    maxAge:   24 * 60 * 60 * 1000  // 1 day
  }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//  Body parser & CORS
app.use(express.json());
app.use(cors({
  origin:       process.env.CLIENT_URL,
  credentials:  true
}));


app.use("/auth",    authRouter);

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  res.send("Hello from the server");
});


// connect to the database
const connectDB = async () => {
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });
        console.log("MongoDB connected to database:", conn.connection.db.databaseName);
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
    }
};
connectDB();


app.listen(port, () => {
  console.log(`Final app listening on port ${port}`);
});
