import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useCallback, useEffect, useState } from "react";
import "./style.css";

export const Search = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const genres = useStoreState((state) => state.genres);

  const getGenres = useStoreActions((actions) => actions.getGenres);

  const fetchGenres = useCallback(async () => {
    setLoading(true);
    try {
      await getGenres({ limit: 50, offset: 0 });
    } catch (error) {
      setError("Something went wrong when fetching releases");
    }
    setLoading(false);
  }, [getGenres]);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);
  return (
    <div>
      <section className="section">
        <h2 className="title">Top Genres</h2>
        <div className="section--body">
          {loading && <div className="section--body--loading">Loading...</div>}
          {error && (
            <div className="section--body--error" style={{ color: "red" }}>
              {error}
            </div>
          )}
          {genres?.items
            ?.filter((genre, i) => i <= 6)
            .map((genre) => (
              <div
                className="section--body--item section--body--item--lg category--item"
                key={genre.id}
                style={{
                  backgroundColor: `#${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)}`,
                }}
              >
                <a
                  href={`https://open.spotify.com/genre/${genre.id}-page`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>{genre.name}</h3>
                  <img src={genre.icons[0].url} alt="" />
                </a>
              </div>
            ))}
        </div>
      </section>

      <section className="section">
        <h2 className="title">Browse all</h2>
        <div className="section--body">
          {genres?.items?.map((genre) => (
            <div
              className="section--body--item category--item"
              style={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
              }}
              key={genre.id}
            >
              <a
                href={`https://open.spotify.com/genre/${genre.id}-page`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{genre.name}</h3>
                <img src={genre.icons[0].url} alt="" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
