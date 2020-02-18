<template>
  <header class="header_module">
    <div class="header_module-container">
      <img @click="toNextPage('')" class="header_module-logo" :src="logo" alt="logo">
      <div class="header_module-search" :class="searchActive ? 'header_module-search-active' : ''">
        <input @keydown.enter="searchHandler" v-model="searchValue" @focus="searchFocus" @blur="searchBlur" class="header_module-search-input" type='text' />
        <el-button @click="searchHandler" size="small" type="primary" icon="el-icon-search" style="border-radius: 0;background-color: #007fff;border: 0;">搜索</el-button>        
      </div>
    </div>
  </header>
</template>

<script>
import logo from '@/assets/imgs/logo.png'
import { eventBus } from '@/utils'
export default {
  name: 'Search',
  data () {
    return {
      logo: logo,
      searchActive: false,
      searchValue: ''
    }
  },
  mounted () {},
  methods: {
    searchHandler () {
      if (!this.searchValue) {
        this.$message({
          message: '请输入内容'
        })
        return
      }
      eventBus.$emit('search', this.searchValue)
    },
    searchFocus () {
      this.searchActive = true
    },
    searchBlur () {
      this.searchActive = false
    },
    toNextPage (router) {
      if (router === 'write' && !this.isLogin) {
        this.$message({
          message: '请先登陆'
        })
        return
      }
      this.$router.push('/' + router)
    }
  }
}
</script>

<style scoped lang='scss'>
.header_module {
  position: sticky;
  top: 0;
  z-index: 9999;
  // position: fixed;
  // top: 0;
  // left: 0;
  // z-index: 999;
  width: 100%;
  height: 56px;
  line-height: 56px;
  background-color: #fff;
  padding-top: 11px;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
  &-container {
    max-width: 960px;
    padding: 0 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
  }
  &-logo {
    width: 70px;
    cursor: pointer;
  }
  &-search {
    display: flex;
    border: 1px solid #e5e5e5;
    height: 32px;
    line-height: 32px;
    margin-left: 20px;
    &-active {
      border-color: #007fff;
      .header_module-search-btn {
        color: #007fff;
      }
    }
    &-input {
      vertical-align: top;
      width: 200px;
      padding: 4px 6px;
      height: 32px;
      line-height: 32px;
      border: none;
      box-sizing: border-box;
      outline: none;
    }
    &-btn {
      cursor: pointer;
    }
  }
}
@media (max-width: 600px) {
  .header_module-write, .header_module-search-btn {
    display: none;
  }
}
</style>
