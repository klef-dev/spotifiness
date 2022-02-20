import { Request, Response } from "express";
import { validationResult } from "express-validator";
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
    try {
      const data = await spotifyApi.search(query, ["artist", "track", "album"]);
      return res.status(data.statusCode).json(data.body);
    } catch (error) {
      return res.status(400).json({ error });
    }
  };
}
