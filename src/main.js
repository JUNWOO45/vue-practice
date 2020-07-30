import Vue from "vue";
import App from "./App.vue";
import TodolistItem from "@/components/TodolistItem";
import FunctionalTemplateTodolist from "@/components/FunctionalTemplateTodolist";
import FunctionalTodolist from "@/components/FunctionalTodolist";
import router from "./router";

Vue.config.productionTip = false;

// 전역 등록
Vue.component("todolist-item", TodolistItem);
Vue.component("FunctionalTodolist", FunctionalTodolist);
Vue.component("FunctionalTemplateTodolist", FunctionalTemplateTodolist);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
