<template>
  <div>
    <list-item :data="news"></list-item>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";

export default {
  computed: {
    ...mapState(["news"]),
  },
  created() {
    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_NEWS")
      .then(() => {
        bus.$emit("end:spinner");
      })
      .catch((err) => {
        console.log(error);
      });
  },
  components: { ListItem },
};
</script>

<style></style>
