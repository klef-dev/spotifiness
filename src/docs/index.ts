import * as info from "./info";
import spotify from "./spotify";
import * as definitions from "./definitions";

export default {
  ...info,
  tags: [
    {
      name: "Releases",
      description: "Get new releases",
    },
    {
      name: "Search",
      description: "Search for albums, artists, tracks",
    },
    {
      name: "Genres",
      description: "Get genres",
    },
  ],
  host:
    process.env.NODE_ENV === "production"
      ? "spotifiness.xyz"
      : `127.0.0.1:${process.env.PORT || 3333}`,
  basePath: "/api/v1",
  schemes: ["https", "http"],
  paths: {
    ...spotify,
  },
  definitions: { ...definitions },
  securityDefinitions: {
    APIKeyHeader: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
    },
  },
};
