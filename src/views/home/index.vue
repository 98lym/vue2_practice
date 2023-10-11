<template>
  <div>
    <button @click="goTodoList">goTodoList</button>
  </div>
</template>
<script>
export default {
  name: 'Home_',
  methods: {
    goTodoList() {
      this.$router.push('./todoList')
    },
  },
}
</script>
<style lang="less" scope></style>
