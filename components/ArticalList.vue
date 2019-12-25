<template>
  <div class="artical_list_module">
    <ul>
      <li v-for="(item, index) in list" :key="index" class="artical_list_module-item">
        <div class="artical_list_module-item-content">
          <a @click="toArticalPage(item)" class="artical_list_module-item-content-title" href="javasctipr:void(0)">38岁谢娜晒美照，十八姑娘一枝花，和张杰夫妻相十足</a>
          <p class="artical_list_module-item-content-des">4月6日，谢娜晒出自己十八岁的美照，发文感叹：“哇！十八滴菇凉一朵花，她们说有点像，是么？”谢娜表达了与杰哥结婚这些年来，两人恩爱甜蜜，越来越有</p>
          <p class="artical_list_module-item-content-action">
            <span>某某人发布于 2019-12-11 1:10</span>
            <span><i class="icon icon-fangwen"></i>10</span>
            <span><i class="icon icon-pinglun"></i>20</span>
            <span><i class="icon icon-zan"></i>30</span>
            <span><i class="icon icon-fenxiang"></i>40</span>
          </p>
        </div>
        <a class="artical_list_module-item-img" href="javasctipr:void(0)">
          <img :src="articalPic" alt="artical">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import articalPic from '@/assets/imgs/artical/1.jpg'
export default {
  name: 'ArticalList',
  data () {
    return {
      articalPic: articalPic,
      list: 10
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
