<template>
  <div class="container_module">
    <div class="container_module-wrap">
      <div class="container_module-left">
        <v-artical :articals="articals"></v-artical>
        <el-pagination
          v-show="articals.length"
          style="margin: 20px 0; text-align: right;"
          background
          layout="prev, pager, next"
          :current-page="pageNum"
          :total="total"
          @current-change="changePageNum"
        >
        </el-pagination>
      </div>
      <div class="container_module-right">
        <banner></banner>
        <zan-list :list="zanList" title="点赞排行榜"></zan-list>
        <copy-right></copy-right>
      </div>
    </div>
  </div>
</template>

<script>
import ArticalList from '@/components/ArticalList'
import Banner from '@/components/Banner'
import ZanList from '@/components/ZanList'
import CopyRight from '@/components/CopyRight'
import { getArtivallist } from '@/api'
export default {
  name: 'Container',
  components: {
    'v-artical': ArticalList,
    Banner,
    ZanList,
    CopyRight
  },
  data () {
    return {
      articals: [],
      zanList: [],
      pageNum: 1,
      pageSize: 10,
      total: 10
    }
  },
  computed: {
    activeIndex: function () {
      return this.$store.state.activeIndex
    },
    categories: function () {
      return this.$store.state.categories
    }
  },
  watch: {
    activeIndex: function (val) {
      this.pageNum = 1
      this.getArtical()
    }
  },
  mounted () {
    // const loading = this.$loading()
    // setTimeout(() => {
    //   loading.close()
    // }, 3000)
    this.getArtical()
    this.getZanlist()
  },
  methods: {
    async getArtical () {
      const articals = await getArtivallist({
        where: {
          category: this.categories.length ? (this.categories[this.activeIndex].name === '推荐' ? '' : this.categories[this.activeIndex]._id) : ''
        },
        include: 'author',
        includeword: {
          username: 1
        },
        limit: this.pageSize,
        skip: (this.pageNum - 1) * this.pageSize
      })
      this.articals = articals.data.data
      this.total = articals.data.total
    },
    async getZanlist () {
      const zanList = await getArtivallist({
        limit: 5,
        order: {
          star: -1
        },
        include: 'author',
        includeword: {
          username: 1
        },
      })
      this.zanList = zanList.data.data
    },
    changePageNum (index) {
      this.pageNum = index
      this.getArtical()
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
