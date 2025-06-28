import express from "express";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import config from "./configs/config.js";


const app = express();

app.use(helmet());
const limiter = rateLimit(config.rateLimit);
app.use(limiter);
app.use(cors(config.cors));
app.use(express.json({limit: "10mb"}));                  
app.use(express.urlencoded({ extended: true }));


if (config.app.env === "development") {
  app.use(logger("dev"));
}


export default app; 