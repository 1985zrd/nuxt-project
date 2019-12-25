<template>
  <div>
    <v-label></v-label>
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
  </div>
</template>

<script>
import Label from '@/components/Label.vue'
import ArticalList from '@/components/ArticalList'
import Banner from '@/components/Banner'
import ZanList from '@/components/ZanList'
import CopyRight from '@/components/CopyRight'
export default {
  name: 'Container',
  components: {
    'v-label': Label,
    'v-artical': ArticalList,
    Banner,
    ZanList,
    CopyRight
  }
}
</script>

<style scoped lang='scss'>
</style>
