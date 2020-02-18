import Vue from 'vue'

export let eventBus = new Vue()

export function checkPicturePX (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
      const url = e.target.result
      const image = new Image()
      image.onload = function () {
        const width = image.width
        const height = image.height
        resolve({
          height,
          width
        })
      }
      image.onerror = function () {
        reject('图片加载出错了！')
      }
      image.src = url
    }
  })
}

export function checkEmail (email) {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)
}

export function checkPassword (password) {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/.test(password) // 6位数字和字母组合  {6,} {6, 10}
}

export function checkMobile (mobile) {
  return /^1[0-9]{10}$/.test(mobile) // 11位手机号
}
