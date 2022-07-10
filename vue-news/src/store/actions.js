import {
  fetchNewsList,
  fetchJobList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from "../api/index.js";

export default {
  FETCH_NEWS({ commit }) {
    return fetchNewsList()
      .then(({ data }) => {
        commit("SET_NEWS", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_JOBS({ commit }) {
    return fetchJobList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => {
        commit("SET_LIST", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_USER({ commit }, userName) {
    return fetchUserInfo(userName)
      .then(({ data }) => {
        commit("SET_USER", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItemInfo(itemId)
      .then(({ data }) => {
        commit("SET_ITEM", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
