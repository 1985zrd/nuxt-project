<template>
  <div class="label_module">
    <ul>
      <li v-for="(item, index) in list" :key="index" :class="index === activeIndex ? 'active' : ''" @click="setActiveIndex(index)">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Label',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    activeIndex: function () {
      return this.$store.state.activeIndex
    }
  },
  methods: {
    setActiveIndex (index) {
      this.$router.push('/')
      this.$store.commit('setActiveIndex', index)
    }
  }
}
</script>

<style scoped lang='scss'>
.label_module {
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(210,210,210,0.2);
  ul {
    display: flex;
    justify-content: flex-start;
    width: 960px;
    margin: 0 auto;
    height: 46px;
    line-height: 50px;
    font-size: 14px;
    .active {
      color: #ff481c;
      // color: #007fff;
      font-weight: 700;
      border-bottom: 3px solid #ff481c;
    }
    li {
      padding: 0 12px;
      cursor: pointer;
      &:hover {
        color: #ff481c;
      }
    }
  }
}
</style>
