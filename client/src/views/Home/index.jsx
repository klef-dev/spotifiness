import React, { useCallback, useEffect, useState } from "react";
import "./style.css";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Album } from "../../components/Album";

export const Home = () => {
  const limit = 10;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const newReleases = useStoreState((state) => state.newReleases);

  const getNewReleases = useStoreActions((actions) => actions.getNewReleases);

  const fetchAudioTracks = useCallback(async () => {
    setLoading(true);
    try {
      await getNewReleases({ limit, offset });
    } catch (error) {
      setError("Something went wrong when fetching releases");
    }
    setLoading(false);
  }, [limit, offset, getNewReleases]);

  useEffect(() => {
    fetchAudioTracks();
  }, [getNewReleases, fetchAudioTracks]);

  const handleLoadMore = (e) => {
    e.preventDefault();
    setOffset(offset + limit);
  };
  return (
    <div>
      <section className="section">
        <div className="section--header">
          <div className="section--header--left">
            <h2 className="title">Home</h2>
          </div>
          {loading && <div className="section--header--right">Loading...</div>}
          {error && (
            <div className="section--header--right" style={{ color: "red" }}>
              {error}
            </div>
          )}
          <div className="section--header--right">
            <a
              href="/"
              onClick={(e) => handleLoadMore(e)}
              className="section--header--right--more"
            >
              VIEW MORE
            </a>
          </div>
        </div>
        <div className="section--body">
          {newReleases?.albums?.items?.map((item) => (
            <Album item={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};
