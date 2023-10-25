<template>
  <div class="body">
    <ul>
      <li v-for="item in todoLists" :key="item.key">
        <div>
          <input type="checkbox" :checked="item.status" @change="(e)=>changeChecked(e, item)"/> <span>{{ item.inputValue }}</span>
        </div>
        <div class="close" @click="deleteFn(item)">X</div>
      </li>
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
  methods: {
    changeChecked: (e, item) => {
      const { target: { checked } } = e
      this.$store.commit('todoList/changeChecked', {checked, item})
    },
    deleteFn(item) {
       this.$store.commit('todoList/deleteFn', item)
    }
  },
}
</script>
<style lang="scss" scope>
.body {
  ul {
    padding: 0;
    li {
      height: 30px;
      list-style: none;
      display: flex;
      justify-content: space-between;

      .close {
        font-size: 20px;
        color: red;
      }
    }
  }
}
</style>
