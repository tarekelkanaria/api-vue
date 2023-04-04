import { createApp } from "vue";
// Import rotuer from router file
import router from "./router";
import "normalize.css";
import "./style.css";
import App from "./App.vue";

// Use Router in the app
createApp(App).use(router).mount("#app");
