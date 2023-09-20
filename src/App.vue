<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новост {{ now }}</h2>
      <span> Открыто {{ openRate }} | Прочитано {{ isRead }} </span>
    </div>
    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      @openNews="openRate++"
      @readNews="toggleViewStatus"
    ></app-news>
  </div>
</template>

<script>
import AppNews from "./components/AppNews.vue";
export default {
  data() {
    return {
      openRate: 0,
      isRead: 0,
      now: new Date().toLocaleDateString(),
      news: [
        {
          id: 1,
          title: "Илон маск запустил ракету на марс",
          isOpen: false,
        },
        {
          id: 2,
          title: "Массовые увольнение программистов",
          isOpen: false,
        },
        {
          id: 3,
          title: "IT компания 6seniors выходит на китайский рынок",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    toggleViewStatus(isRead) {
      isRead ? this.isRead++ : this.isRead--;
    },
  },
  components: {
    AppNews,
  },
};
</script>

<style></style>
