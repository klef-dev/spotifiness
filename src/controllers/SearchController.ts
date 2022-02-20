import { Request, Response } from "express";
import { validationResult } from "express-validator";
import geoip from "geoip-lite";
import { spotifyApi } from "../helpers";
export class SearchController {
  public search = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ errors: errors.array({ onlyFirstError: true }) });
    }
    const { query } = req.query as any;

    const { limit = 10, offset = 0 }: { limit: number; offset: number } =
      req.query as any;
    const ip =
      req.headers["x-forwarded-for"] || (req.connection.remoteAddress as any);
    const geo = geoip.lookup(ip);
    const country = geo?.country || "GB";

    try {
      const data = await spotifyApi.search(
        query,
        ["artist", "track", "album"],
        {
          limit,
          offset,
          market: country,
        }
      );
      return res.status(data.statusCode).json(data.body);
    } catch (error) {
      return res.status(400).json({ error });
    }
  };
}
