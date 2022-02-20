import React from "react";
import PlayIcon from "../../icons/Play";

export const Album = ({ item }) => {
  return (
    <div
      className={`section--body--item ${
        item.album_type === "album" ? "album--item" : "artist--item"
      }`}
      onClick={() => window.open(item.external_urls.spotify, "_blank")}
    >
      <p
        className="section--body--item--subtitle"
        style={{ textTransform: "capitalize", fontWeight: "bold" }}
      >
        {item.album_type}
      </p>
      <div className="section--body--item--img">
        <img src={item.images[0].url} alt="" />
      </div>
      <p className="section--body--item--title">{item.name}</p>
      <p className="section--body--item--subtitle">
        {item.artists.map((artist, i) => (
          <a
            key={artist.id}
            onClick={(e) => {
              e.preventDefault();
              window.open(artist.external_urls.spotify, "_blank");
            }}
            href="/"
            style={{ color: "#fff" }}
          >
            {artist.name}
            {i < item.artists.length - 1 ? ", " : ""}
          </a>
        ))}
      </p>
      <p className="section--body--item--subtitle">
        {item.release_date}{" "}
        {item.album_type !== "single" && (
          <>
            <b>.</b> {item.total_tracks} songs
          </>
        )}
      </p>
      <div className="section--body--item--play">
        <PlayIcon style={{ width: "24px", height: "24px" }} />
      </div>
    </div>
  );
};
