<template>
  <ul>
    <li v-for="todoItem in todos" :key="todoItem.id">
      <todolist-item :title="todoItem.title" :completed="todoItem.completed">
        <template v-slot:header="slotProps">
          <input type="checkbox" :checked="slotProps.completed" />
        </template>
        <template v-slot:footer="slotProps">
          <button
            @click="removeTodo(slotProps.title)"
            type="checkbox"
            :completed="slotProps.title"
          >제거1</button>
        </template>
      </todolist-item>
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
  },
  methods: {
    removeTodo(title) {
      console.log("removeTodo", title);
    }
  }
};
</script>