<template>
  <div class="artical_list_module">
    <ul>
      <li v-for="(item, index) in articals" :key="index" class="artical_list_module-item">
        <div class="artical_list_module-item-content">
          <a @click="toArticalPage(item)" class="artical_list_module-item-content-title" href="javasctipr:void(0)">{{ item.title }}</a>
          <p class="artical_list_module-item-content-des">{{ item.introduction }}</p>
          <p class="artical_list_module-item-content-action">
            <span>{{ item.author }}发布于 {{ item.createTime | formatTime }}</span>
            <span><i class="icon icon-fangwen"></i>{{ item.visitor }}</span>
            <span><i class="icon icon-pinglun"></i>{{ item.commentators }}</span>
            <span><i class="icon icon-zan"></i>{{ item.star }}</span>
            <span><i class="icon icon-fenxiang"></i>{{ item.shared }}</span>
          </p>
        </div>
        <a v-if="item.imageUrl" class="artical_list_module-item-img" href="javasctipr:void(0)">
          <img :src="item.imageUrl" alt="artical">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArticalList',
  props: {
    articals: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    toArticalPage (item) {
      // this.$router.push(`/artical?id=${item._id}`)
      const routeUrl = this.$router.resolve({ path: `/artical?id=${item._id}` })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<style scoped lang='scss'>
.artical_list_module {
  // padding-top: 20px;
  &-item {
    padding: 12px 10px 12px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-content {
      &-title {
        display: block;
        color:#333;
        margin: 0 0 4px 0;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
      }
      &-des {
        color: #999;
        font-size: 13px;
        line-height: 24px;
        margin: 0 0 8px 0;
      }
      &-action {
        color: #b4b4b4;
        margin: 0;
        font-size: 12px;
        line-height: 20px;
        span {
          margin-right: 12px;
        }
        i {
          font-size: 12px;
        }
      }
    }
    &-img {
      width: 150px;
      padding-left: 10px;
      img {
        width: 150px;
      }
    }
  }
}
</style>
