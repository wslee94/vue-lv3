import {
  fetchNewsList,
  fetchJobList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index.js";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit("SET_NEWS", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchJobList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItemInfo(itemId)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
