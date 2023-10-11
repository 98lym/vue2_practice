<template>
  <div class="head">
    <input type="text" @keyup="keyup" />
  </div>
</template>
<script>
export default {
  name: 'head_',
  data() {
    return {}
  },
  methods: {
    keyup(e) {
      const {
        target: { value },
        key,
      } = e
      if (key === 'Enter') {
        this.$store.commit('todoList/getInputValue', value)
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
