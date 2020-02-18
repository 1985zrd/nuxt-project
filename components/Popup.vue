<template>
  <div v-if="show" class="popup_module">
    <h3 class="popup_module-title">{{ title }}</h3>
    <span @click="back('close')" class="popup_module-close"><i class="icon icon-close"></i></span>
    <div class="popup_module-content">
      <slot name="content">
        <p slot="content">这里是内容...</p>
      </slot>
    </div>
    <div v-show="footer" class="popup_module-foot">
      <button @click="back('cancel')">取消</button>
      <button @click="back('confirm')">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    show: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    back (type) {
      this.$emit('callback', type)
    }
  }
}
</script>

<style scoped lang='scss'>
.popup_module {
  position: fixed;
  top: 12%;
  left: 50%;
  z-index: 9999;
  width: 500px;
  margin-left: -200px;
  border-radius: 6px;
  box-shadow: 0 0 20px #b3b3b3;
  background-color: #fff;
  &-title {
    margin: 0;
    padding-left: 20px;
    line-height: 50px;
    font-weight: 500;
    font-size: 16px;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
  }
  &-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    text-align: center;
    color: #666;
    cursor: pointer;
    i {
      font-size: 22px;
    }
    &:hover {
      color: #000;
    }
  }
  &-content {
    font-size: 14px;
    padding: 10px 20px;
    border-bottom: 1px solid #e5e5e5;
    p {
      line-height: 24px;
    }
  }
  &-foot {
    font-size: 14px;
    padding: 10px 20px;
    line-height: 30px;
    text-align: right;
    button {
      line-height: 1.5;
      display: inline-block;
      text-align: center;
      padding: 2px 16px;
      outline: none;
      border: 0;
      color: #666;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      cursor: pointer;
      &:first-child {
        margin-right: 10px;
        &:hover {
          color: #007fff;
          border: 1px solid #007fff;
        }
      }
      &:last-child {
        color:#fff;
        background-color: #007fff;
        &:hover {
          background-color: #40a9ff;
        }
      }
    }
  }
}
</style>
