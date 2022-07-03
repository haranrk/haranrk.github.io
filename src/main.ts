import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import SvgTransition from "vue-svg-transition";

import "virtual:windi.css";
import "virtual:windi-devtools";

const app = createApp(App);

app.use(router);
app.use(SvgTransition);

app.mount("#app");
