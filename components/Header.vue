<template>
  <header class="header_module">
    <div class="header_module-container">
      <img class="header_module-logo" :src="logo" alt="logo">
      <div class="header_module-search" :class="searchActive ? 'header_module-search-active' : ''">
        <input @focus="searchFocus" @blur="searchBlur" class="header_module-search-input" type='text' />
        <i class="header_module-search-btn icon icon-sousuo"></i>
      </div>
      <div class="header_module-operation">
        <a class="header_module-write" href="javascript:void(0)" ><i class="icon icon-xiewenzhang"></i>写文章</a>
        <a v-show="true" @click.stop="signUpHander" class="header_module-signup" href="javascript:void(0)" >注册</a>
        <a v-show="true" @click.stop="signInHander" class="header_module-signin" href="javascript:void(0)" >登录</a>
        <a v-show="false" class="header_module-touxiang" href="javascript:void(0)" ><i class="icon icon-touxiang"></i>我的</a>
      </div>
    </div>
    <popup @click.native.stop :show="popup.isShow" :title="popup.title" @callback="popupBack">
      <component ref="sign" :is="currentComponent" slot="content"></component>
    </popup>
  </header>
</template>

<script>
import logo from '@/assets/imgs/logo.png'
import Popup from './Popup'
import SignIn from './SignIn'
import SignUp from './SignUp'
export default {
  name: 'Header',
  components: {
    Popup,
    SignIn,
    SignUp
  },
  data () {
    return {
      logo: logo,
      searchActive: false,
      popup: {
        isShow: false,
        title: '登录'
      },
      currentComponent: 'SignIn'
    }
  },
  mounted () {
    window.addEventListener('click', () => {
      this.popup.isShow = false
    }, false)
  },
  methods: {
    searchFocus () {
      this.searchActive = true
    },
    searchBlur () {
      this.searchActive = false
    },
    popupBack (type) { // close | cancel | confirm
      if (type === 'confirm') {
        console.log(this.$refs.sign.username)
      } else {
        this.popup.isShow = false
      }
    },
    signUpHander () {
      this.popup.isShow = true
      this.currentComponent = 'SignUp'
      this.popup.title = '注册'
    },
    signInHander () {
      this.popup.isShow = true
      this.currentComponent = 'SignIn'
      this.popup.title = '登录'
    }
  }
}
</script>

<style scoped lang='scss'>
.header_module {
  position: sticky;
  top: 0;
  z-index: 9;
  // position: fixed;
  // top: 0;
  // left: 0;
  // z-index: 999;
  width: 100%;
  height: 56px;
  line-height: 56px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
  &-container {
    max-width: 960px;
    padding: 0 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  &-logo {
    width: 70px;
    cursor: pointer;
  }
  &-search {
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    // height: 32px;
    line-height: 32px;
    padding-right: 6px;
    &-active {
      border-color: #007fff;
      .header_module-search-btn {
        color: #007fff;
      }
    }
    &-input {
      display: inline-block;
      vertical-align: top;
      width: 200px;
      padding: 4px 6px;
      height: 32px;
      line-height: 22px;
      border: none;
      box-sizing: border-box;
      outline: none;
    }
    &-btn {
      cursor: pointer;
      font-size: 26px;
    }
  }
  &-operation {
    height: 56px;
    padding-top: 11px;
    box-sizing: border-box;
  }
  &-write, &-signup, &-signin, &-touxiang {
    display: inline-block;
    vertical-align: top;
    color: #ff481c;
    padding: 0 10px;
    line-height: 32px;
    margin: 0 8px;
    border-radius: 6px;
    border: 1px solid #ff481c;
  }
  &-write, &-touxiang {
    background-color: #ff481c;
    color: #fff;
    i {
      margin-right: 6px;
    }
    &:hover {
      text-decoration: none;
    }
  }
}
@media (max-width: 600px) {
  .header_module-write, .header_module-search-btn {
    display: none;
  }
}
</style>
