import { Router, Request, Response } from "express";
import { spotifyApi } from "../../helpers";

// Controller
import { SearchController } from "../controllers";

// Middleware
import { searchRequest } from "../middleware";

export class Routes {
  public router: Router = Router();

  private searchController: SearchController = new SearchController();

  public routes(): Router {
    this.router.get("/", (req: Request, res: Response) => {
      spotifyApi
        .getNewReleases({ limit: 20 })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.status(401).json(err);
        });
    });

    this.router.get("/search", searchRequest, this.searchController.search);

    return this.router;
  }
}
