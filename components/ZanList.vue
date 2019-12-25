<template>
  <div class="zan_module">
    <h3><i class="icon icon-paihangbang"></i> 点赞排行榜</h3>
    <ul class="zan_module-content">
      <li class="zan_module-content-item" @click="toArticalPage">
        <div class="zan_module-content-item-left">
          <h4>vue打包优化大小,vue服务端渲染，非cli环境实现spa单页面项目</h4>
          <p class="zan_module-content-item-left-meta"><span>某某作者</span><span><i class="icon icon-zan"></i>100</span></p>
        </div>
        <img class="zan_module-content-item-right" :src="pic" alt="pic">
      </li>
    </ul>
  </div>
</template>

<script>
import articalPic from '@/assets/imgs/artical/1.jpg'
export default {
  name: 'Zan',
  data () {
    return {
      pic: articalPic
    }
  },
  methods: {
    toArticalPage (item) {
      console.log(item)
      this.$router.push('/artical')
      // const routeUrl = this.$router.resolve({ name: 'Artical' })
      // window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<style scoped lang='scss'>
.zan_module {
  background-color: #fff;
  margin-top: 10px;
  h3 {
    margin: 0;
    line-height: 46px;
    padding-left: 15px;
    font-size: 14px;
    color:#333;
    border-bottom: 1px solid #e5e5e5;
  }
  h4, p {
    margin: 0;
  }
  &-content-item {
    display: flex;
    padding: 10px 10px;
    &-left {
      // padding: 0 10px;
      font-size: 12px;
      &-meta {
        color: #999;
        padding-top: 4px;
        span {
          display: inline-block;
          vertical-align: middle;
          line-height: 12px;
          padding-top: 4px;
          margin-right: 6px;
        }
        i {
          font-size: 12px;
        }
      }
    }
    &-right {
      width: 80px;
      max-height: 60px;
      vertical-align: middle;
    }
    &:hover {
      background-color: #e5e5e5;
      cursor: pointer;
    }
  }
}
</style>
