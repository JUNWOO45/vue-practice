<template>
  <div>
    <h1>TODO LIST</h1>
    <input type="text" v-model="newTodoTitle" />
    <button @click="addTodo">추가</button>
    <div>
      <button @click="componentName = 'Todolist'">general component</button>
      <button @click="componentName = 'FunctionalTodolist'">
        functional component
      </button>
      <button @click="componentName = 'FunctionalTemplateTodolist'">
        functional template component
      </button>
    </div>

    <div>Dynamic Component is : {{ componentName }}</div>
    <keep-alive>
      <component :is="componentName" :todos="todos" />
    </keep-alive>

    <hr />
    <h1>Async Component</h1>
    <div>
      <label
        v-flex:row="'center center'"
        style="height: 40px; border: 1px solid red;"
      >
        <input type="checkbox" v-model="showComponent" />
        <span>showComponent: {{ showComponent }}</span>
      </label>
    </div>
    <async-comp v-if="showComponent"></async-comp>
    <hr />
    <div v-flex:column="'flex-start center'">
      <router-link to="/">go '/'</router-link>
      <router-link to="/sub">go '/sub'</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Todolist from "@/components/Todolist";
import FunctionalTodolist from "@/components/FunctionalTodolist";
import FunctionalTemplateTodolist from "@/components/FunctionalTemplateTodolist";
import DirectiveFlex from "@/directives/flex";

export default {
  name: "App",
  components: {
    Todolist,
    FunctionalTodolist,
    FunctionalTemplateTodolist,
    AsyncComp: () => import("@/components/AsyncComp"),
  },
  directives: {
    flex: DirectiveFlex,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "AAA",
          completed: true,
        },
        {
          id: 2,
          title: "BBB",
          completed: false,
        },
      ],
      newTodoTitle: "",
      componentName: "Todolist",
      showComponent: false,
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodoTitle,
        completed: false,
      });

      this.newTodoTitle = "";
    },
  },
};
</script>
