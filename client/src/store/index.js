import axios from "axios";
import { createStore, thunk, action, persist } from "easy-peasy";

export default createStore(
  persist({
    api_uri: process.env.REACT_APP_API_URI,
    newReleases: {},
    genres: {},
    getNewReleases: thunk(
      async (actions, payload = { limit: 10, offset: 0 }, { getState }) => {
        const { api_uri } = getState();
        const { data } = await axios.get(
          `${api_uri}?limit=${payload.limit}&offset=${payload.offset}`
        );
        actions.setNewReleases(data);
        return data;
      }
    ),
    search: thunk(
      async (actions, payload = { limit: 10, offset: 0 }, { getState }) => {
        const { api_uri } = getState();
        const { data } = await axios.get(
          `${api_uri}/search?query=${payload.query}&limit=${payload.limit}&offset=${payload.offset}`
        );
        actions.setNewReleases(data);
        return data;
      }
    ),
    getGenres: thunk(
      async (actions, payload = { limit: 10, offset: 0 }, { getState }) => {
        const { api_uri } = getState();
        const { data } = await axios.get(
          `${api_uri}/genres?limit=${payload.limit}&offset=${payload.offset}`
        );
        actions.setGenres(data.categories);
        return data;
      }
    ),
    setNewReleases: action((state, payload) => {
      state.newReleases = payload;
    }),
    setGenres: action((state, payload) => {
      state.genres = payload;
    }),
  })
);
