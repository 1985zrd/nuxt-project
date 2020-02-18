import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '@/assets/sass/variables.scss'

export default () => {
  Vue.use(Element, { locale, zIndex: 99999 })
}
