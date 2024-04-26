<template>
  <div>
    <div>
      <label>月:</label>
      <input type="number" min="1" max="12" v-model="month" @input="validateDate" />
    </div>
    <div>
      <label>日:</label>
      <input type="number" min="1" :max="daysInMonth(month)" v-model="day" @input="validateDate" />
    </div>
    <div>
      <label>时:</label>
      <input type="number" min="0" max="23" v-model="hour" @input="validateDate" />
    </div>
    <p>当前选择的时间: {{ formattedTime }}</p>
  </div>
</template>

<script>
export default {
  name: 'selector_',
  data() {
    return {
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      hour: new Date().getHours(),
    }
  },
  computed: {
    formattedTime() {
      const pad = (num) => String(num).padStart(2, '0')
      return `${pad(this.month)}月${pad(this.day)}日 ${pad(this.hour)}时`
    },
  },
  methods: {
    daysInMonth(month) {
      // 获取指定月份的天数
      return new Date(new Date().getFullYear(), month, 0).getDate()
    },
    validateDate() {
      // 这里可以添加额外的验证逻辑，比如检查日期是否合法等
      if (this.day > this.daysInMonth(this.month)) {
        this.day = this.daysInMonth(this.month)
      }
    },
  },
  mounted() {
    // 初始化时验证日期
    this.validateDate()
  },
}
</script>

<style scoped>
/* 添加你的样式 */
</style>
