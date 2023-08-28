import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "./components/TheHeder.vue";
import "./theme.css";

const app = createApp(App);
app.mount("#app");
app.component("the-header", TheHeader);
