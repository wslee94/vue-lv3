import bus from "../utils/bus.js";

export default {
  /* 재사용할 컴포넌트 옵션 */
  async created() {
    try {
      bus.$emit("start:spinner");
      await this.$store.dispatch("FETCH_LIST", this.$route.name);
      bus.$emit("end:spinner");
    } catch (err) {
      console.log(err);
    }
  },
};
