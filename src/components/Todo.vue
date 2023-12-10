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
<script setup lang="ts">
</script>


<!-- <script setup lang="ts">
import { ref } from 'vue'
const newTodo = ref('')
const todos = ref(['Learn Vue 3', 'Learn TypeScript', 'Learn Composition API'])
const addTodo = () => {
  todos.value.push(newTodo.value)
  newTodo.value = ''
}
</script> -->
