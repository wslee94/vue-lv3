<template>
  <div>
    <list-item :data="jobs"> </list-item>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "../components/ListItem.vue";

export default {
  computed: {
    ...mapState(["jobs"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
  components: {
    ListItem,
  },
};
</script>

<style></style>
