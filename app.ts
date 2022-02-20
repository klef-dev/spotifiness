import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import express, { Request, Response } from "express";
import apicache from "apicache";
import swaggerUI from "swagger-ui-express";
import docs from "./src/docs";

import { Routes } from "./src/routes/api";

dotenv.config();

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public mongoUrl: string = `${process.env.MONGO_URI}`;

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(express.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(express.urlencoded({ extended: true, limit: "50mb" }));
    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(cors());
    const cache = apicache.middleware;

    this.app.use(cache("5 minutes"));

    const PORT = process.env.PORT || 3333;

    this.app.use("/api/v1", this.routePrv.routes());
    this.app.use("/docs", swaggerUI.serve, swaggerUI.setup(docs));

    this.app.use("/", (req, res) => {
      res.redirect(301, "/docs");
    });

    this.app.listen(PORT, () => {
      console.log(`Serving on http://localhost:${PORT} 🚀`);
    });
  }

  private async mongoSetup(): Promise<void> {
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.set("useFindAndModify", false);
    try {
      await mongoose.connect(this.mongoUrl, options);
      console.log(`Database connection successful`);
    } catch (error) {
      console.log(`Error connecting to DB`, error);
      return process.exit(1);
    }
  }
}

export default new App().app;
