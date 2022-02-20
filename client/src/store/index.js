import axios from "axios";
import { createStore, thunk, action, persist } from "easy-peasy";

export default createStore(
  persist({
    api_uri: process.env.REACT_APP_API_URI,
    newReleases: {},
    getNewReleases: thunk(async (actions, payload, { getState }) => {
      const { api_uri } = getState();
      const { data } = await axios.get(
        `${api_uri}?limit=${payload.limit}&offset=${payload.offset}`
      );
      actions.setNewReleases(data);
      return data;
    }),
    search: thunk(async (actions, payload, { getState }) => {
      const { api_uri } = getState();
      const { data } = await axios.get(
        `${api_uri}/search?query=${payload.query}`
      );
      actions.setNewReleases(data);
      return data;
    }),
    setNewReleases: action((state, payload) => {
      state.newReleases = payload;
    }),
  })
);
