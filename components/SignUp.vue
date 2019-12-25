<template>
  <div class="signup_module">
    <p class="signup_module-user">
      <span>用户名</span>
      <input v-model="username" type="text" placeholder="手机号"/>
    </p>
    <p class="signup_module-email">
      <span>邮箱</span>
      <input v-model="email" type="password" placeholder="邮箱"/>
    </p>
    <p class="signup_module-password">
      <span>密码</span>
      <input v-model="password" type="password" placeholder="密码（6-16位数字与字母组合）"/>
    </p>
    <p class="signup_module-password">
      <span>确认密码</span>
      <input v-model="confirmPassword" type="password" placeholder="密码（6-16位数字与字母组合）"/>
    </p>
    <!-- <div class="signup_module-recover">
      <a href="javascript:void(0)">忘记密码？</a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
}
</script>

<style scoped lang='scss'>
.signup_module {
  padding-bottom:10px;
  &-user, &-password, &-email {
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
}
</style>
