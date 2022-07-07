<template>
  <div>
    <div :key="item.id" v-for="item in jobs">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchJobList } from "../api/index.js";

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobList()
      .then((res) => {
        this.jobs = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>
