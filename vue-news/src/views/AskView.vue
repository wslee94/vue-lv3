<template>
  <div>
    <p :key="item.id" v-for="item in ask">
      <router-link :to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small
        >{{ item.time_ago }} by
        <router-link :to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["ask"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
