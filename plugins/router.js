import globalConfig from '@/config'
export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    if (globalConfig.cancelTokenList && globalConfig.cancelTokenList.length) {
      globalConfig.cancelTokenList.forEach(request => {
        request.cancel()
      })
    }
    globalConfig.cancelTokenList = []
    next()
  })
}