import ListView from "../ListView.vue";
import bus from "../../utils/bus.js";

export default function createListView(name) {
  /* 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리 */
  return {
    name,
    async created() {
      try {
        bus.$emit("start:spinner");
        await this.$store.dispatch("FETCH_LIST", this.$route.name);
        bus.$emit("end:spinner");
      } catch (err) {
        console.log(err);
      }
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
