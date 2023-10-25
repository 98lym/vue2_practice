<template>
  <div class="head">
    <input type="text" v-model.trim="todo" @keyup="keyup" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'head_',
  data() {
    return {
      todo: '',
    }
  },
  computed: {
    ...mapState('todoList', ['todoLists']),
  },
  methods: {
    keyup(e) {
      const { key } = e
      if (key === 'Enter' && this.todo) {
        if (this.todoLists.some((item) => item.inputValue === this.todo)) return
        this.$store.commit('todoList/getInputValue', this.todo)
        this.todo = ''
      }
    },
  },
}
</script>
<style lang="scss" scope>
.head {
  height: 40px;
  input {
    width: 100%;
    height: 80%;
  }
}
</style>
