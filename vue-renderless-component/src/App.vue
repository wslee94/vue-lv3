<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/todos/1">
      <div slot-scope="{ response, loading }">
        <div v-if="loading">Loading...</div>
        <div v-else>
          {{ response }}
        </div>
      </div>
    </fetch-data>
  </div>
</template>

<script>
import FetchData from "./components/FetchData.vue";
export default {
  components: {
    FetchData,
  },
};
</script>
