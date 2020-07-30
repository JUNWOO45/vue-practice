<template>
  <div>
    <h1>TODO LIST</h1>
    <input type="text" v-model="newTodoTitle" />
    <button @click="addTodo">추가</button>
    <todolist :todos="todos"></todolist>

    <hr />
    <h1>Functional Component</h1>
    <functional-todolist :todos="todos"></functional-todolist>

    <hr />
    <h1>Functional Template Component</h1>
    <functional-template-todolist :todos="todos"></functional-template-todolist>
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
      newTodoTitle: ""
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