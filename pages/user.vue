<template>
  <div class="container_module">
    <div class="container_module-wrap">
      <div class="container_module-left">
        <h2>用户详情页面</h2>
      </div>
      <div class="container_module-right">
        <Userinfo />
      </div>
    </div>
  </div>
</template>

<script>
import Userinfo from '@/components/user/Userinfo'
export default {
  components: {
    Userinfo
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const res = await this.$getData('/api/user/userinfo', {}, 'POST')
      console.log(res)
    }
  }
}
</script>

<style></style>
