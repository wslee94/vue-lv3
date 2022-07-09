import { fetchNewsList, fetchJobList, fetchAskList } from "../api/index.js";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit("SET_NEWS", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchJobList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
