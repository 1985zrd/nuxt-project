<template>
  <div class="common_module">
    <el-form ref="comment" :model="form" :rules="rules" hide-required-asterisk>
      <el-form-item label="评论列表" prop="content">
        <el-input
          maxlength="200"
          show-word-limit
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 10}"
          placeholder="请写下你的评论。。。"
          v-model="form.content">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit('comment')" :type="isLogin ? 'primary' : ''">{{ isLogin ? '提交' : '登陆评论' }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { submitComment } from '@/api'
export default {
  props: {
    articalId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      form: {
        content: ''
      },
      rules: {
        content: [
          { required: true, message: '请输入你的评论', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    isLogin: function () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    submit (formName) {
      if (!this.isLogin) {
        this.$message({
          message: '请登陆'
        })
        return
      }
      if (!this.articalId) {
        this.$message({
          message: '获取不到文章id，请刷新重试'
        })
        return
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.sendComment()
        } else {
          console.log('error submit!!')
          return false;
        }
      })
    },
    async sendComment () {
      let res = await submitComment({
        id: this.articalId,
        content: this.form.content
      })
      this.$message({
        message: res.message
      })
      if (res.code === 200) {
        this.$emit('sub_comment_success')
      }
    }
  }
}
</script>

<style>
.common_module {}
</style>
