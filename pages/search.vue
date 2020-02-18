<template>
  <div class="container_module">
    <div class="container_module-wrap">
      <div class="container_module-left">
        <p v-show="!articals.length" class="search_module-tip">输入标题搜索内容</p>
        <v-artical :articals="articals"></v-artical>
      </div>
    </div>
  </div>
</template>

<script>
import ArticalList from '@/components/ArticalList'
import { getArtivallist } from '@/api'
import { eventBus } from '@/utils'
export default {
  name: 'Container',
  components: {
    'v-artical': ArticalList
  },
  data () {
    return {
      articals: []
    }
  },
  mounted () {
    eventBus.$off('search')
    eventBus.$on('search', async (searchValue) => {
      const articals = await getArtivallist({
        where: {
          title: searchValue
        }
      })
      this.articals = articals.data.data
    })
  }
}
</script>

<style scoped lang='scss'>
.search_module-tip {
  line-height: 40px;
  font-size: 20px;
  text-indent: 2em;
}
</style>
