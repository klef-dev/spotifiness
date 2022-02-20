import { Router, Request, Response } from "express";

// Controller
import { SpotifyController } from "../controllers";

// Middleware
import { searchRequest } from "../middleware";

export class Routes {
  public router: Router = Router();

  private spotifyController: SpotifyController = new SpotifyController();

  public routes(): Router {
    this.router
      .get("/", this.spotifyController.index)
      .get("/search", searchRequest(), this.spotifyController.search)
      .get("/genres", this.spotifyController.genres);

    return this.router;
  }
}
