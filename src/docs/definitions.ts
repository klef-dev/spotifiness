const albums = {
  type: "object",
  properties: {
    href: {
      type: "string",
    },
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          album_type: {
            type: "string",
          },
          artists: {
            type: "array",
            items: {
              type: "object",
              properties: {
                external_urls: {
                  type: "object",
                  properties: {
                    spotify: {
                      type: "string",
                    },
                  },
                },
                href: {
                  type: "string",
                },
                id: {
                  type: "string",
                },
                name: {
                  type: "string",
                },
                type: {
                  type: "string",
                },
              },
            },
          },
          available_markets: {
            type: "array",
            items: {
              type: "string",
            },
          },
          external_urls: {
            type: "object",
            properties: {
              spotify: {
                type: "string",
              },
            },
          },
          href: {
            type: "string",
          },
          id: {
            type: "string",
          },
          images: {
            type: "array",
            items: {
              type: "object",
              properties: {
                height: {
                  type: "integer",
                },
                url: {
                  type: "string",
                },
                width: {
                  type: "integer",
                },
              },
            },
          },
          name: {
            type: "string",
          },
          release_date: {
            type: "string",
            format: "date",
          },
          release_date_precision: {
            type: "string",
          },
          total_tracks: {
            type: "integer",
          },
          type: {
            type: "string",
          },
          uri: {
            type: "string",
          },
        },
      },
    },
    limit: {
      type: "integer",
    },
    next: {
      type: "string",
    },
    offset: {
      type: "integer",
    },
    previous: {
      type: "string",
    },
    total: {
      type: "integer",
    },
  },
};
const artists = {
  type: "object",
  properties: {
    href: {
      type: "string",
    },
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          external_urls: {
            type: "object",
            properties: {
              spotify: {
                type: "string",
              },
            },
          },
          href: {
            type: "string",
          },
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          type: {
            type: "string",
          },
        },
      },
    },
    limit: {
      type: "integer",
    },
    next: {
      type: "string",
    },
    offset: {
      type: "integer",
    },
    previous: {
      type: "string",
    },
    total: {
      type: "integer",
    },
  },
};
const tracks = {
  type: "object",
  properties: {
    href: {
      type: "string",
    },
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          albums,
          artists,
          available_markets: {
            type: "array",
            items: {
              type: "string",
            },
          },
          disc_number: {
            type: "integer",
          },
          duration_ms: {
            type: "integer",
          },
          explicit: {
            type: "boolean",
          },
          external_ids: {
            type: "object",
            properties: {
              isrc: {
                type: "string",
              },
            },
          },
          external_urls: {
            type: "object",
            properties: {
              spotify: {
                type: "string",
              },
            },
          },

          href: {
            type: "string",
          },
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          popularity: {
            type: "integer",
          },
          preview_url: {
            type: "string",
          },
          track_number: {
            type: "integer",
          },
          type: {
            type: "string",
          },
          uri: {
            type: "string",
          },
        },
      },
    },
    limit: {
      type: "integer",
    },
    next: {
      type: "string",
    },
    offset: {
      type: "integer",
    },
    previous: {
      type: "string",
    },
    total: {
      type: "integer",
    },
  },
};

export const ReleaseResponse = {
  type: "object",
  properties: {
    albums,
  },
};
export const SearchResponse = {
  type: "object",
  properties: {
    albums,
    artists,
    tracks,
  },
};
export const CategoryResponse = {
  type: "object",
  properties: {
    categories: {
      type: "object",
      properties: {
        href: {
          type: "string",
        },
        items: {
          type: "array",
          items: {
            type: "object",
            properties: {
              href: {
                type: "string",
              },
              icons: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    height: {
                      type: "integer",
                    },
                    url: {
                      type: "string",
                    },
                    width: {
                      type: "integer",
                    },
                  },
                },
              },
              id: {
                type: "string",
              },
              name: {
                type: "string",
              },
              type: {
                type: "string",
              },
            },
          },
        },
        limit: {
          type: "integer",
        },
        next: {
          type: "string",
        },
        offset: {
          type: "integer",
        },
        previous: {
          type: "string",
        },
        total: {
          type: "integer",
        },
      },
    },
  },
};
