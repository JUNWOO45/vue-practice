<template functional>
  <ul>
    <li v-for="todoItem in props.todos" :key="todoItem.id">
      <todolist-item :title="todoItem.title" :completed="todoItem.completed"></todolist-item>
    </li>
  </ul>
</template>