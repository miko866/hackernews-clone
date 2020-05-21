<template>
  <div class="news-item">
    <p class="news-item-title">{{ item.title }}</p>
    <p class="news-item-details">
      {{ item.points }} points by {{ item.user }} {{ item.time_ago }} |
      {{ item.comments_count }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style>
.news-item-title::before {
  counter-increment: news;
  content: counter(news) ".";
  color: #828282;
}
.news-item {
  font-size: 0.9em;
}

.news-item-details {
  margin-left: 2em;
  font-size: 0.7em;
  color: #828282;
}
</style>