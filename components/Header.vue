<template>
  <header class="header_module">
    <div class="header_module-container">
      <img @click="toNextPage('')" class="header_module-logo" :src="logo" alt="logo">
      <div class="header_module-search" @click="toNextPage('search')">
        <!-- <input @focus="searchFocus" @blur="searchBlur" class="header_module-search-input" type='text' /> -->
        <i class="header_module-search-btn icon icon-sousuo"></i>
      </div>
      <div class="header_module-operation">
        <a @click="toNextPage('write')" class="header_module-write" href="javascript:void(0)" ><i class="icon icon-xiewenzhang"></i>写文章</a>
        <a v-show="!isLogin" @click.stop="signUpHander" class="header_module-signup" href="javascript:void(0)" >注册</a>
        <a v-show="!isLogin" @click.stop="signInHander" class="header_module-signin" href="javascript:void(0)" >登录</a>
        <a @click="toNextPage('user')" v-show="isLogin" class="header_module-touxiang" href="javascript:void(0)" ><i class="icon icon-touxiang"></i>欢迎：{{ username }}</a>
        <el-button v-show="isLogin" @click="setUp.isShow=true">
          <i class="el-icon-s-tools"></i>设置
        </el-button>
      </div>
    </div>
    <popup v-transform @click.native.stop :show="popup.isShow" :title="popup.title" @callback="popupBack">
      <component ref="sign" :is="currentComponent" slot="content"></component>
    </popup>
    <popup v-transform @click.native.stop :show="setUp.isShow" :title="setUp.title" @callback="setUpBack" :footer="false">
      <template slot="content">
        <el-form label-width="120px" label-position="left">
          <el-form-item label="退出登录">
            <el-button @click="signOutHandler" type="primary">确定</el-button>
          </el-form-item>
        </el-form>
      </template>
    </popup>
  </header>
</template>

<script>
import logo from '@/assets/imgs/logo.png'
import Popup from './Popup'
import SignInModule from './SignIn'
import SignUpModule from './SignUp'
import { signUp, signIn, signOut } from '@/api'
import { checkEmail, checkMobile, checkPassword } from '@/utils'
export default {
  name: 'Header',
  components: {
    Popup,
    SignInModule,
    SignUpModule
  },
  data () {
    return {
      logo: logo,
      searchActive: false,
      popup: {
        isShow: false,
        title: '登录'
      },
      currentComponent: 'SignInModule',
      setUp: {
        isShow: false,
        title: '设置'
      }
    }
  },
  computed: {
    isLogin: function () {
      return this.$store.state.isLogin
    },
    username: function () {
      let username = this.$store.state.username
      return checkMobile(username) ? username.replace(/(\d{3})\d{4}(\d{3})/, '$1****$2') : username
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
    async popupBack (type) { // close | cancel | confirm
      if (type === 'confirm') {
        let {username, password, confirmPassword} = this.$refs.sign
        // checkEmail, checkMobile, checkPassword
        if (!checkEmail(username) && !checkMobile(username)) {
          this.$message({
            message: '请输入正确手机号/邮箱'
          })
          return
        }
        if (!checkPassword(password)) {
          this.$message({
            message: '请输入6-10位数字与字母组合密码'
          })
          return
        }
        let res
        if (this.currentComponent === 'SignUpModule') {
          if (password !== confirmPassword) {
            this.$message({
              message: '密码和确认密码不一致'
            })
            return
          }
          res = await signUp({
            username: username,
            password: password,
            confirmPassword: confirmPassword
          })
        } else if (this.currentComponent === 'SignInModule') {
          res = await signIn({
            username: username,
            password: password,
          })
        }
        this.$message({
          message: res.message
        })
        if (res.code === 200) {
          this.$store.commit('setLogin', true)
          this.$store.commit('setUsername', res.data.username)
          this.popup.isShow = false
        }
        // console.log(this.$refs.sign.username)
      } else {
        this.popup.isShow = false
      }
    },
    signUpHander () {
      this.popup.isShow = true
      this.currentComponent = 'SignUpModule'
      this.popup.title = '注册'
    },
    signInHander () {
      this.popup.isShow = true
      this.currentComponent = 'SignInModule'
      this.popup.title = '登录'
    },
    toNextPage (router) {
      if (router === 'write' && !this.isLogin) {
        this.$message({
          message: '请先登陆'
        })
        return
      }
      this.$router.push('/' + router)
    },
    setUpBack (type) { // close | cancel | confirm
      // console.log(type)
      this.setUp.isShow = false
    },
    async signOutHandler () {
      let res = await signOut()
      if (res.code === 200) {
        this.$store.commit('setLogin', false)
        this.$store.commit('setUsername', '')
        this.setUp.isShow = false
      }
      this.$message({
        message: res.message
      })
    }
  },
  directives: {
    transform: function (el) {
      document.body.appendChild(el)
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
    width: 200px;
    text-align: right;
    // height: 32px;
    line-height: 32px;
    padding-right: 6px;
    cursor: pointer;
    &-btn {
      font-size: 26px;
    }
  }
  &-operation {
    display: flex;
    height: 56px;
    align-items: center;
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
