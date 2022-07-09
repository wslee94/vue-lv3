<template>
  <div>
    <p :key="item.id" v-for="item in jobs">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["jobs"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
