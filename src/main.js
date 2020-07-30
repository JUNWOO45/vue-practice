import Vue from "vue";
import App from "./App.vue";
import TodolistItem from "@/components/TodolistItem";

Vue.config.productionTip = false;

// 전역 등록
Vue.component("todolist-item", TodolistItem);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
