<template>
  <div>
    <h1>TODO LIST</h1>
    <input type="text" v-model="newTodoTitle" />
    <button @click="addTodo">추가</button>
    <div>
      <button @click="componentName = 'Todolist'">general component</button>
      <button @click="componentName = 'FunctionalTodolist'">functional component</button>
      <button @click="componentName = 'FunctionalTemplateTodolist'">functional template component</button>
    </div>

    <div>Dynamic Component is : {{ componentName }}</div>
    <keep-alive>
      <component :is="componentName" :todos="todos" />
    </keep-alive>
  </div>
</template>
<script>
import Todolist from "@/components/Todolist";
import FunctionalTodolist from "@/components/FunctionalTodolist";
import FunctionalTemplateTodolist from "@/components/FunctionalTemplateTodolist";

export default {
  name: "App",
  components: {
    Todolist,
    FunctionalTodolist,
    FunctionalTemplateTodolist
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "AAA",
          completed: true
        },
        {
          id: 2,
          title: "BBB",
          completed: false
        }
      ],
      newTodoTitle: "",
      componentName: "Todolist"
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodoTitle,
        completed: false
      });

      this.newTodoTitle = "";
    }
  }
};
</script>