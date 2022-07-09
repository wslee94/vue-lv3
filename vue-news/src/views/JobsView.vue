<template>
  <div>
    <list-item :data="jobs"> </list-item>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";

export default {
  computed: {
    ...mapState(["jobs"]),
  },
  created() {
    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_JOBS")
      .then(() => {
        bus.$emit("end:spinner");
      })
      .catch((err) => {
        console.log(error);
      });
  },
  components: {
    ListItem,
  },
};
</script>

<style></style>
