<template>
  <ul>
    <li v-for="todoItem in todos" :key="todoItem.id">
      <todolist-item :title="todoItem.title" :completed="todoItem.completed"></todolist-item>
    </li>
  </ul>
</template>
<script>
import TodolistItem from "@/components/TodolistItem";

export default {
  name: "Todolist",
  components: {
    TodolistItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
};
</script>