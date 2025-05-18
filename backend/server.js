import express from "express";
import cors from "cors";
import 'dotenv/config';
import mongoose from "mongoose";
import articleRouter from "./routes/articles.js";


const port = process.env["PORT"];
const allowedOrigins = [process.env.CLIENT_URL];

// middleware
const app = express();
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
})); // Enable CORS for all routes
app.use(express.json());


app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  res.send("Hello from the server");
});


// connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });
        console.log('MongoDB Connected successfully');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
    }
};
connectDB();


app.listen(port, () => {
  console.log(`Final app listening on port ${port}`);
});
