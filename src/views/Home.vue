<template>
  <div class="home">
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div>
      <news-item v-for="item in newsItems" :key="item.id" :item="item" />
    </div>
    <div>
      <p class="more" @click="loadMore">More</p>
    </div>
  </div>
</template>

<script>
import types from "../types";
import NewsItem from "../components/NewsItem";
import { value, onCreated, watch } from "vue-function-api";
import { useState, useActions, useRouter } from "@u3u/vue-hooks";

export default {
  components: {
    NewsItem
  },
  setup() {
    const { route } = useRouter();

    const { loading, newsItems } = useState(["loading", "newsItems"]);

    const { GET_NEWS_ITEMS } = useActions([types.GET_NEWS_ITEMS]);
    const currentPage = value(1);

    const setCurrentType = type => {
      currentPage.value = 1;
      GET_NEWS_ITEMS({
        type,
        page: currentPage.value
      });
    };

    watch(
      () => route.value.params.type,
      type => {
        setCurrentType(type);
      }
    );

    onCreated(() => {
      setCurrentType(route.value.params.type);
    });

    const loadMore = () => {
      currentPage.value += 1;
      GET_NEWS_ITEMS({
        type: route.value.params.type,
        page: currentPage.value
      });
    };

    return {
      loading,
      newsItems,
      loadMore
    };
  }
};
</script>

<style>
.home {
  counter-reset: news;
  background-color: #f6f6ef;
  padding: 1em;
}

.more {
  color: #828282;
}
</style>