<template>
  <div class="mavonEditor" :class="[preview ? 'mavon-preview' : 'mavon-editor']">
    <client-only>
      <mavon-editor
        ref="mavon"
        v-model="content"
        :toolbars="toolbars"
        :subfield="subfield"
        :editable="editable"
        :toolbarsFlag="toolbarsFlag"
        :defaultOpen="defaultOpen"
        :transition="false"
        @imgAdd="uploadImg"
        @imgDel="deleteImg"
      />
    </client-only>
  </div>
</template>
<script>
import { upload } from '@/api'
export default {
  name: 'markdown',
  props: {
    value: {
      type: String,
      default: ''
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      subfield: false,
      editable: !this.preview,
      toolbarsFlag: !this.preview,
      defaultOpen: this.preview ? 'preview' : 'edit',
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    }
  },
  computed: {
    content: {
      get: function () {
        return this.value
      },
      set: function (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    async uploadImg (pos, $file) {
      let formdata = new FormData()
      formdata.append('file', $file)
      const res = await upload(formdata)
      if (res.code !== 0) {
        return this.$message.error(res.message)
      }
      this.$refs.mavon.$img2Url(pos, res.data.url)
    },
    deleteImg () {
      console.log('del img')
    }
  }
}
</script>
<style lang="scss">
.v-note-show.single-show {
  transition: none !important;
}
.markdown-body {
  overflow: hidden;
  box-shadow: none !important;
  border: 1px solid #dcdfe6 !important;
  // textarea {
  //   line-height: 1.4 !important;
  // }
  code {
    font-family: initial;
  }
}
.mavon-editor {
  .v-note-wrapper {
    &.fullscreen {
      max-height: none;
    }
    max-height: 600px;
  }
}
.mavon-preview {
  .markdown-body {
    border: 0 !important;
  }
  .v-show-content {
    background-color: transparent !important;
  }
  pre {
    font-size: 14px !important;
  }
}
// 禁止注释斜体
.hljs-quote {
  font-style: none !important;
}
// markdown样式修改
.v-note-op {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
