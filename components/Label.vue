<template>
  <div class="label_module">
    <ul>
      <li v-for="(item, index) in labelList" :key="index" :class="item.value === activeIndex ? 'active' : ''" @click="setActiveIndex(item)">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Label',
  data () {
    return {
      labelList: [
        {
          value: 0,
          label: '推荐'
        },
        {
          value: 1,
          label: 'web前端'
        },
        {
          value: 2,
          label: 'nodejs'
        },
        {
          value: 3,
          label: '摄影'
        },
        {
          value: 4,
          label: '旅游'
        },
        {
          value: 5,
          label: '电影'
        },
        {
          value: 6,
          label: '娱乐'
        }
      ],
      activeIndex: 0
    }
  },
  methods: {
    setActiveIndex (item) {
      this.activeIndex = item.value
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
        text-decoration: underline;
      }
    }
  }
}
</style>
