<template>
  <div class="userinfo-box">
    <p>{{ userinfo.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    userinfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
