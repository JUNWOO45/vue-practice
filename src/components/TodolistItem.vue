<template>
  <div>
    <input type="checkbox" :checked="checked" />
    <input type="text" v-model="inputValue" />
    <button>삭제</button>
  </div>
</template>
<script>
export default {
  name: "TodolistItem",
  props: {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      inputValue: this.title,
      checked: this.completed
    };
  }
};
</script>