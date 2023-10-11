<template>
  <div class="todo-list">
    <Head />
    <Body />
    <Bottom />
  </div>
</template>
<script>
import Head from './components/head'
import Body from './components/body'
import Bottom from './components/bottom'
export default {
  name: 'todoList',
  components: {
    Head,
    Body,
    Bottom,
  },
}
</script>
<style lang="scss" scope>
.todo-list {
  width: 600px;
  margin: auto;
}
</style>
