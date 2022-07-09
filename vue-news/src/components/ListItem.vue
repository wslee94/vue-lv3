<template>
  <div>
    <ul class="list">
      <li :key="item.id" v-for="item in data" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="title">
            <a v-if="item.domain" :href="item.url">
              {{ item.title }}
            </a>
            <router-link v-else :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text"
            >{{ item.time_ago }} by
            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="link-text"
            >
              {{ item.user }}
            </router-link>
            <a v-else-if="item.domain" :href="item.url" class="link-text">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}

.title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
