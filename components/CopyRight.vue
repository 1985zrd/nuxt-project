<template>
  <div class="copy_right">
    <p class="copy_right-p">Copyright ©2020  京ICP备20003692号
      <!-- <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=20003692" target="_blank"><span class="lh s-bottom-recordcode">京ICP备20003692号</span></a> -->
    </p>
    <p class="copy_right-p">网站仅用于学习交流</p>
    <p class="copy_right-p">如有不良信息，请联系：rd_1985@163.com</p>
  </div>
</template>

<script>
export default {
  name: 'CopyRight'
}
</script>

<style scoped lang='scss'>
.copy_right {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px;
  &-p {
    margin: 0;
    font-size: 12px;
    line-height: 22px;
    color:#999;
  }
}
</style>
