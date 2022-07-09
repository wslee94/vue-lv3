<template>
  <div>
    <user-profile :user="user">
      <div slot="userName">{{ user.id }}</div>
      <span slot="time">{{ `joined ${user.created}` }}, </span>
      <span slot="karma">{{ user.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  computed: {
    ...mapState(["user"]),
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
  components: {
    UserProfile,
  },
};
</script>

<style></style>
