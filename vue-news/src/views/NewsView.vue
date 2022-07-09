<template>
  <div>
    <list-item :data="news"></list-item>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "../components/ListItem.vue";

export default {
  computed: {
    ...mapState(["news"]),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
  components: { ListItem },
};
</script>

<style></style>
