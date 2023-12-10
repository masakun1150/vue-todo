<template>
  <div>
    <h1>ToDo App</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Todo',
  setup() {
    const newTodo = ref('');
    const todos = ref<string[]>([]);

    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        todos.value.push(newTodo.value.trim());
        newTodo.value = '';
      }
    };

    return {
      newTodo,
      todos,
      addTodo,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
