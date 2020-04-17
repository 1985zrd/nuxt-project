<template>
  <div class="container_module">
    <div class="container_module-wrap">
      <div class="container_module-left artical_detail">
        <h2 class="title">{{ artical.title }}  <span class="mini_label">{{ artical.author ? artical.author.username : '' }}</span> <span class="mini_label">写于{{ artical.createTime | formatTime }} </span></h2>
        <p>{{ artical.introduction }}</p>
        <Markdown :value="artical.content" preview />
        <div style="text-align: center;">
          <el-button @click="zanHandler" :type="artical.isAlreadyStar ? 'primary' : ''" class="icon icon-zan" size="mini" round style="font-size: 12px;"> {{ artical.star }}</el-button>
        </div>
        <SubmitComment :artical-id="$route.query.id" @sub_comment_success="submitSuc"/>
        <CommentList :list="list"/>
        <el-pagination
          v-show="list.length"
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
       <zan-list title="作者的其他相关文章" icon="" :list="authorArtical"></zan-list>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/common/markdown'
import SubmitComment from '@/components/comment/SubmitComment'
import CommentList from '@/components/comment/CommentList'
import ZanList from '@/components/ZanList'
// import { getArticalDetail, getCommentList, getArtivallist, zanArtical } from '@/api'
import { getDetailUrl, getArticalListUrl, getCommentListUrl, zanArticalUrl } from '@/api/url'
export default {
  components: {
    Markdown,
    SubmitComment,
    CommentList,
    ZanList
  },
  validate ({ query }) {
    if (!query.id) throw new Error('未找到ID')
    return true
  },
  data () {
    return {
      artical: {},
      pageNum: 1,
      pageSize: 10,
      total: 1,
      list: [],
      authorArtical: []
    }
  },
  mounted () {
    const id = this.$route.query.id
    id && this.getArtical(id)
    // id && this.getCommentList()
  },
  // async asyncData (ctx) {
  //   const id = ctx.query.id

  //   if (!id) return;

  //   const res = await ctx.app.$getData(ctx.app.$baseUrl + getDetailUrl, {
  //     id: id
  //   })

  //   const articals = await ctx.app.$getData(ctx.app.$baseUrl + getArticalListUrl, {
  //     where: {
  //       author: res.data.author._id
  //     },
  //     include: 'author',
  //     includeword: {
  //       username: 1
  //     },
  //     limit: 5
  //   }, 'POST')

  //   const comments = await ctx.app.$getData(ctx.app.$baseUrl + getCommentListUrl, {
  //     where: {
  //       artical: id
  //     },
  //     limit: 10,
  //     skip: 0
  //   }, 'POST')

  //   return {
  //     artical: res.data,
  //     authorArtical: articals.data.data,
  //     list: comments.data.data
  //   }
  // },
  methods: {
    async zanHandler () {
      if (this.artical.isAlreadyStar) {
        this.$message({
          message: '你已经点过赞了'
        })
        return
      }
      let res = await this.$getData(zanArticalUrl, {
        id: this.artical._id
      }, 'POST')
      if (res.code === 200) {
        this.$message({
          message: res.message
        })
        // this.getArtical(this.artical._id)
        this.artical.star += 1
      }
    },
    async getArtical (id) {
      const res = await this.$getData(getDetailUrl, {
        id: id
      })
      this.artical = res.data
      // this.$nextTick(() => {
      //   this.getAotherArtical()
      // })
    },
    async getAotherArtical () {
      let res = await getArtivallist({
        where: {
          author: this.artical.author._id
        },
        include: 'author',
        includeword: {
          username: 1
        },
        limit: 5
      })
      this.authorArtical = res.data.data
    },
    async getCommentList () {
      const res = await this.$getData(getCommentListUrl, {
        where: {
          artical: this.$route.query.id
        },
        limit: this.pageSize,
        skip: (this.pageNum - 1) * this.pageSize
      }, 'POST')
      this.list = res.data.data
      this.total = res.data.total
    },
    changePageNum (index) {
      this.pageNum = index
      this.getCommentList()
    },
    submitSuc () {
      this.pageNum = 1
      this.getCommentList()
    }
  }
}
</script>

<style scoped lang="scss">
.artical_detail {
  padding: 10px 20px;
}
.title {
  font-size: 24px;
  .mini_label {
    font-weight: normal;
    font-size: 14px;
    color: #c4c2c0;
  }
}
</style>
