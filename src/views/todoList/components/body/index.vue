<template>
  <div class="body">
    <ul>
      <li v-for="item in todoLists" :key="item.key">{{ item.inputValue }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'body_',
  data() {
    return {}
  },
  computed: {
    ...mapState('todoList', ['todoLists']),
  },
}
</script>
<style lang="scss" scope>
.body {
  li {
    list-style: none;
  }
}
</style>
