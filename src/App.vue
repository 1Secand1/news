<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новост {{ now }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
    };
  },
};
</script>

<style></style>
