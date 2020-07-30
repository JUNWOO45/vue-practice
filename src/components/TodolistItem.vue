<template>
  <div>
    <slot name="header" v-bind:completed="checked">
      <input type="checkbox" :checked="checked" />
    </slot>
    <input type="text" v-model="inputValue" />
    <slot name="footer" v-bind:title="title">
      <button>삭제</button>
    </slot>

    <span>{{ dueDate | dateFormat }}</span>
  </div>
</template>
<script>
import dateFormatFilter from "@/filters/dateFormat";

export default {
  name: "TodolistItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  filters: {
    dateFormat: dateFormatFilter,
  },
  data() {
    return {
      inputValue: this.title,
      checked: this.completed,
      dueDate: Date.now(),
    };
  },
};
</script>
