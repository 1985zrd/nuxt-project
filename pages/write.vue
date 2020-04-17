<template>
  <div class="container_module">
    <div class="container_module-wrap">
      <div class="container_module-left write_artical">
        <h3 class="write_artical-title">开始/编辑文章</h3>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="标题：" prop="title">
            <el-input v-model="form.title" placeholder="请输入标题" maxlength="20" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="简介：" prop="introduction">
            <el-input
              maxlength="200"
              show-word-limit
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 4}"
              placeholder="请输入简介"
              v-model="form.introduction">
            </el-input>
          </el-form-item>
          <el-form-item label="封面图：">
            <el-upload
              class="avatar-uploader"
              action=""
              :http-request="upload"
              :show-file-list="false"
            >
              <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="内容：" prop="content">
            <Markdown v-model="form.content" />
          </el-form-item>
          <el-form-item label="分类" prop="category">
            <el-select v-model="form.category" placeholder="请选择分类">
              <el-option v-for="(item, index) in categories" :key="index" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选项：">
            <el-radio-group v-model="form.state">
              <el-radio :label="1">草稿</el-radio>
              <el-radio :label="2">发布</el-radio>
            </el-radio-group>
            <el-checkbox v-show="form.state === 2" v-model="form.anonymous" label="是否匿名发布" style="margin-left: 30px;"></el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button @click="saveVertical('form')" type="primary">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/common/markdown'
import { checkPicturePX } from '@/utils'
import { upload, saveArtival, getCategorylist } from '@/api'
export default {
  components: {
    Markdown
  },
  head () {
    return {
      title: '添加/编辑文章',
      meta: [
        { hid: 'description', name: 'description', content: '写一篇文章吧，让我们在总结中前进。' }
      ]
    }
  },
  data () {
    return {
      form: {
        _id: '',
        title: '',
        introduction: '',
        content: '',
        imageUrl: '',
        category: '',
        state: 2,
        anonymous: false // 是否匿名
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        introduction: [
          { required: true, message: '请输入简介', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请编辑内容', trigger: 'blur' }
        ],
        category: [
          { required: true, message: '请选择分类', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    'form.state': function (value, oldvalue) {
      if (value === 1) {
        this.form.anonymous = false
      }
    }
  },
  computed: {
    categories: function () {
      return this.$store.state.categories
    }
  },
  mounted () {
    this.form._id = this.$route.query.id || ''
    if (!this.categories.length) {
      this.getCategory()
    }
  },
  methods: {
    async getCategory () {
      const res = await getCategorylist()
      this.$store.commit('setCategory', res.data)
    },
    async upload (e) {
      try {
        const { height, width} = await checkPicturePX(e.file)
        if (height > 2000 || width > 3000) {
          this.$message('图片像素太大了')
          return
        }
      } catch (e) {
        this.$message(e.message)
        return
      }
      let limit = 1024 * 1024 * 2
      if (e.file.size > limit) {
        this.$message('图片不能超过2M')
        return
      }
      let formdata = new FormData()
      formdata.append('file', e.file)
      const res = await upload(formdata)
      this.form.imageUrl = res.data.url
    },
    saveVertical (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.save()
        } else {
          console.log('error submit!!')
          return false;
        }
      })
    },
    async save () {
      const res = await saveArtival(this.form)
      this.$message(res.message)
      if (res.code === 200) {
        setTimeout(() => {
          this.$router.push('/')
        }, 2000)
      }
    }
  }
}
</script>

<style lang="scss">
.write_artical {
  padding: 10px 20px;
  &-title {
    text-align: center;
    margin: 10px 0;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
