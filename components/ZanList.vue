<template>
  <div class="zan_module">
    <h3><i :class="'icon ' + icon"></i> {{ title }}</h3>
    <p v-show="!list.length" class="no_data">暂无数据</p>
    <ul class="zan_module-content">
      <li class="zan_module-content-item" v-for="(item, index) in list" :key="index" @click="toArticalPage(item)">
        <div class="zan_module-content-item-left">
          <h4 class="zan_module-title">{{ item.title }}</h4>
          <p class="zan_module-content-item-left-meta"><span>{{ item.author && item.author.username ? item.author.username : item.author || '' }}</span><span><i class="icon icon-zan"></i>{{ item.star }}</span></p>
        </div>
        <img v-if="item.imageUrl" class="zan_module-content-item-right" :src="item.imageUrl" alt="pic">
      </li>
    </ul>
  </div>
</template>

<script>
import { getArtivallist } from '@/api'
export default {
  name: 'Zan',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: '标题'
    },
    icon: {
      type: String,
      default: 'icon-paihangbang'
    }
  },
  methods: {
    toArticalPage (item) {
      const routeUrl = this.$router.resolve({ path: `/artical?id=${item._id}` })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<style scoped lang='scss'>
.zan_module {
  background-color: #fff;
  margin-top: 10px;
  &-title {
    color: #666;
  }
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
  h4 {
    font-size: 14px;
  }
  &-content-item {
    display: flex;
    padding: 10px 10px;
    justify-content: space-between;
    &-left {
      padding-right: 6px;
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
