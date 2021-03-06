import Vue from 'vue'
import moment from 'moment'

export default () => {
  Vue.filter('formatTime', function (time) {
    return moment(time).format('YYYY-MM-DD HH:mm:ss')
  })
  Vue.filter('username', function (val) {
    return val.replace(/(\d{3})\d{4}(\d{}4)/, '$1****$2')
  })
}
