export default {
  "/": {
    get: {
      tags: ["Releases"],
      summary: "Top releases",
      description: "Initial request",
      operationId: "index",
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "query",
          name: "limit",
          description: "The numbers of items to return",
          schema: {
            type: "integer",
          },
        },
        {
          in: "query",
          name: "offset",
          description:
            "The number of items to skip before starting to collect the result set",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Loaded successfully",
          schema: {
            $ref: "#/definitions/ReleaseResponse",
          },
        },
      },
    },
  },
  "/search": {
    get: {
      tags: ["Search"],
      summary: "Search for albums, artists, tracks",
      description: "Search for albums, artists, tracks",
      operationId: "search",
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "query",
          name: "query",
          description: "Search parameter",
          required: true,
          schema: {
            type: "string",
          },
        },
        {
          in: "query",
          name: "limit",
          description: "The numbers of items to return",
          schema: {
            type: "integer",
          },
        },
        {
          in: "query",
          name: "offset",
          description:
            "The number of items to skip before starting to collect the result set",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Search results",
          schema: {
            $ref: "#/definitions/SearchResponse",
          },
        },
      },
    },
  },
  "/genres": {
    get: {
      tags: ["Genres"],
      summary: "Get genres",
      description: "Get genres",
      operationId: "genres",
      consumes: ["application/json"],
      produces: ["application/json"],
      parameters: [
        {
          in: "query",
          name: "limit",
          description: "The numbers of items to return",
          schema: {
            type: "integer",
          },
        },
        {
          in: "query",
          name: "offset",
          description:
            "The number of items to skip before starting to collect the result set",
          schema: {
            type: "integer",
          },
        },
      ],
      responses: {
        200: {
          description: "Genres loaded successfully",
          schema: {
            $ref: "#/definitions/CategoryResponse",
          },
        },
      },
    },
  },
};
