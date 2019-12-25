<template>
  <div class="banner_module" @mouseenter="stopMove" @mouseleave="loopMove">
    <span class="banner_module-prev" @click="move('prev')"><i class="icon icon-back"></i></span>
    <span class="banner_module-next" @click="move('next')"><i class="icon icon-next1"></i></span>
    <transition-group tag="ul" name="move" class="banner_module-content">
      <li v-show="index === activeIndex" v-for="(item, index) in list" :key="index">
        <img :src="item.url" alt="banner">
      </li>
    </transition-group>
    <ul class="banner_module-point">
      <li :class="index === activeIndex ? 'active' : ''" @click="setActiveIndex(index)" v-for="(item, index) in list" :key="index"></li>
    </ul>
  </div>
</template>

<script>
import b1 from '@/assets/imgs/artical/b1.jpg'
import b2 from '@/assets/imgs/artical/b2.jpg'
import b3 from '@/assets/imgs/artical/b3.jpg'
export default {
  name: 'Banner',
  data () {
    return {
      activeIndex: 0,
      list: [
        {
          url: b1
        },
        {
          url: b2
        },
        {
          url: b3
        }
      ],
      timer: null
    }
  },
  mounted () {
    this.loopMove()
    this.$once('hook:beforeDestroy', () => {
      this.stopMove()
    })
  },
  methods: {
    loopMove () {
      clearInterval(this.timer)
      const len = this.list.length
      if (len <= 1) return
      this.timer = setInterval(() => {
        this.move('next')
      }, 4000)
    },
    stopMove () {
      clearInterval(this.timer)
    },
    move (direction) {
      const len = this.list.length
      let currentIndex = this.activeIndex
      if (len <= 1) return
      if (direction === 'prev') {
        currentIndex = currentIndex - 1
      } else if (direction === 'next') {
        currentIndex = currentIndex + 1
      }
      if (currentIndex < 0) currentIndex = len - 1
      if (currentIndex > len - 1) currentIndex = 0
      this.activeIndex = currentIndex
    },
    setActiveIndex (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style scoped lang='scss'>
.banner_module {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  &-prev, &-next {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    margin-top: -10px;
    cursor: pointer;
    opacity: 0.3;
    z-index: 9;
    &:hover {
      opacity: 1;
    }
  }
  &-prev {
    left: 10px;
  }
  &-next {
    right: 10px;
  }
  &-point {
    position: absolute;
    width: 100%;
    height: 20px;
    left: 0;
    bottom: 0;
    padding-top: 5px;
    text-align: center;
    z-index: 5;
    li {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin: 0 4px;
      background-color: #fff;
    }
    & .active {
      background-color: #ff481c;
    }
  }
  &-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    li {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      transform: translate(0, 0);
    }
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .move-enter-active {
    transition: transform 1s linear;
  }
  .move-leave-active {
    transition: transform 1s linear 0.02s;
  }
  .move-enter {
    transform: translate(100%, 0);
  }
  .move-leave-active {
    transform: translate(-100%, 0);
  }
}
</style>
