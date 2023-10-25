<template>
  <div class="bottom">
    <div>
      <span>ToTal：{{ todoLists.length }}</span>
      <input type="checkbox" v-model="isAllChecked" />
    </div>
    <div class="allDel" @click="allDeleteFn">X</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'bottom_',
  computed: {
    ...mapState('todoList', ['todoLists']),
    isAllChecked: {
      get() {
        if (!this.todoLists.length > 0) return
        const status = this.todoLists.every((item) => item && item.status)
        return status
      },
      set(value) {
        this.$store.commit('todoList/isAllCheckedFn', value)
        //
      },
    },
  },
  methods: {
    allDeleteFn() {
      this.$store.commit('todoList/allDeleteFn')
    },
  },
}
</script>
<style lang="scss" scope>
.bottom {
  display: flex;
  justify-content: space-between;
  .allDel {
    font-size: 20px;
    color: red;
  }
}
</style>
