<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <app-button @action="open">
      {{ isNewsOpen ? "Закрыть" : "Открыть" }}
    </app-button>

    <app-button color="danger" v-if="isNewsRead" @action="toggleViewStatus">
      Пометить не прочитанной
    </app-button>

    <div v-if="isNewsOpen">
      <hr />

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        facere aut ipsam tempora atque beatae ratione. Neque fugit atque a
        aspernatur aliquam veniam maxime! Nisi saepe nobis vero repudiandae.
        Earum.
      </p>

      <app-button v-if="!isNewsRead" color="primary" @action="toggleViewStatus">
        Отметить прочитанной
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  emits: ["openNews", "readNews"],
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data() {
    return {
      isNewsOpen: this.isOpen,
      isNewsRead: false,
    };
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) {
        this.$emit("openNews");
      }
    },
    toggleViewStatus() {
      this.isNewsOpen = false;
      this.isNewsRead = !this.isNewsRead;
      this.$emit("readNews", this.isNewsRead);
    },
  },
  components: {
    AppButton,
  },
};
</script>
