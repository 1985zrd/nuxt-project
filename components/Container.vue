<template>
  <div class="container_module">
    <div class="container_module-wrap">
      <div class="container_module-left">
        <v-artical></v-artical>
      </div>
      <div class="container_module-right">
        <banner></banner>
        <zan-list></zan-list>
        <copy-right></copy-right>
      </div>
    </div>
  </div>
</template>

<script>
import ArticalList from 'component/ArticalList'
import Banner from 'component/Banner'
import ZanList from 'component/ZanList'
import CopyRight from 'component/CopyRight'
export default {
  name: 'Container',
  components: {
    'v-artical': ArticalList,
    Banner,
    ZanList,
    CopyRight
  }
}
</script>

<style scoped lang='scss'>
.container_module {
  // height: 100%;
  // width: 960px;
  margin: 15px auto 0;
  box-sizing: border-box;
  &-wrap {
    display: flex;
    // height: 100%;
    // overflow: auto;
  }
  &-left {
    flex: 1;
    background-color: #fff;
  }
  &-right {
    width: 260px;
    margin-left: 20px;
  }
}
</style>
