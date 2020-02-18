import globalConfig from '@/config'
import { Loading } from 'element-ui'

let requestNumber = 0

let loading

export default {
  start () {
    if (requestNumber === 0) {
      loading = Loading.service({
        text: '加载中...'
      })
    }
    requestNumber++
  },
  close () {
    if (requestNumber <= 0) return
    requestNumber--
    if (requestNumber === 0) {
      globalConfig.cancelTokenList = []
      loading && loading.close()
    }
  },
  end () {
    setTimeout(this.close, 300)
  }
}