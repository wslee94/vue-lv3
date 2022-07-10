import {
  fetchNewsList,
  fetchJobList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from "../api/index.js";

export default {
  async FETCH_NEWS({ commit }) {
    try {
      const { data } = await fetchNewsList();
      commit("SET_NEWS", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  async FETCH_JOBS({ commit }) {
    try {
      const { data } = await fetchJobList();
      commit("SET_JOBS", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  async FETCH_ASK({ commit }) {
    try {
      const { data } = await fetchAskList();
      commit("SET_ASK", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const { data } = await fetchList(pageName);
      commit("SET_LIST", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  async FETCH_USER({ commit }, userName) {
    try {
      const { data } = await fetchUserInfo(userName);
      commit("SET_USER", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  async FETCH_ITEM({ commit }, itemId) {
    try {
      const { data } = await fetchItemInfo(itemId);
      commit("SET_ITEM", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};
