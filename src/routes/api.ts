import { Router, Request, Response } from "express";
import geoip from "geoip-lite";
import { spotifyApi } from "../helpers";

// Controller
import { SearchController } from "../controllers";

// Middleware
import { searchRequest } from "../middleware";

export class Routes {
  public router: Router = Router();

  private searchController: SearchController = new SearchController();

  public routes(): Router {
    this.router.get("/", (req: Request, res: Response) => {
      const { limit = 10, offset = 0 }: { limit: number; offset: number } =
        req.query as any;
      const ip =
        req.headers["x-forwarded-for"] || (req.connection.remoteAddress as any);
      const geo = geoip.lookup(ip);
      const country = geo?.country || "GB";
      spotifyApi
        .getNewReleases({ limit, country, offset })
        .then((data) => {
          res.status(data.statusCode).json(data.body);
        })
        .catch((err) => {
          res.status(401).json(err);
        });
    });

    this.router.get("/search", searchRequest(), this.searchController.search);

    return this.router;
  }
}
