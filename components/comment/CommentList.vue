<template>
  <div class="common_list_module">
    <div class="common_list_module-item" v-for="(item, index) in list" :key="index">
      <p>
        <span class="common_list_module-item-user">{{ item.author.username }}</span>
        <span class="common_list_module-item-time">{{ item.createTime | formatTime }}</span>
      </p>
      <p class="common_list_module-item-content">{{ item.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
}
</script>

<style lang="scss">
.common_list_module {
  p {
    margin: 6px 0;
  }
  &-item {
    padding: 4px 10px;
    &-user {
      font-weight: 700;
    }
    &-time {
      font-size: 14px;
      color: #c4c2c0;
    }
    &-content {
      font-size: 14px;
      // text-indent: 2em;
    }
  }
}
</style>
