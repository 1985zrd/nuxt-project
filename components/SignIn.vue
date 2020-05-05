<template>
  <div class="signin_module">
    <p class="signin_module-user">
      <span>用户名</span>
      <input v-model="username" type="text" placeholder="手机号/邮箱"/>
    </p>
    <p class="signin_module-password">
      <span>密码</span>
      <input v-model="password" @keyup.enter="enterHandler" type="password" placeholder="密码（6-10位数字与字母组合）"/>
    </p>
    <!-- <div class="signin_module-recover">
      <a href="javascript:void(0)">忘记密码？</a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    enterHandler () {
      this.$emit('callback', 'confirm')
    }
  }
}
</script>

<style scoped lang='scss'>
.signin_module {
  padding-bottom:10px;
  &-user, &-password {
    margin: 0;
    line-height: 40px;
    span, input {
      display: inline-block;
      vertical-align: middle;
    }
    span {
      width: 80px;
      text-align: right;
      margin-right: 20px;
    }
    input {
      width: 260px;
      padding: 4px 6px;
      height: 32px;
      line-height: 22px;
      border-radius: 4px;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      outline: none;
    }
  }
  // &-recover {
  //   text-align: right;
  //   padding-right: 30px;
  // }
}
</style>
