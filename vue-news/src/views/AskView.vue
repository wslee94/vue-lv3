<template>
  <div>
    <list-item :data="ask"></list-item>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "../components/ListItem.vue";

export default {
  computed: {
    ...mapState(["ask"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
  components: {
    ListItem,
  },
};
</script>

<style></style>
