import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchIcon from "../../icons/Search";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Search = () => {
  const query = useQuery();
  const [q, setQuery] = useState(query.get("query") || "");
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setQuery(e.target.value);
    query.delete("query");
    if (e.target.value) {
      query.append("query", e.target.value);
    }
    navigate(`/?${query.toString()}`);
  };
  return (
    <div className="header--search input-group has-left-icon has-right-icon can-delete">
      <SearchIcon
        style={{ width: "24px", height: "24px" }}
        className="left-icon"
      />
      <input
        type="search"
        id="search"
        name="search"
        className="input"
        placeholder="Artist, songs or albums"
        value={q}
        onChange={handleChange}
      />
    </div>
  );
};
