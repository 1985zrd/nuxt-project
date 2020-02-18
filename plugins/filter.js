import Vue from 'vue'
import moment from 'moment'

export default () => {
  Vue.filter('formatTime', function (time) {
    return moment(time).format('YYYY-MM-DD HH:mm:ss')
  })
}
