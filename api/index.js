import getData from '@/http'

const prefix = '/api'

// 获取分类列表
export const getCategorylist = () => getData(prefix + '/getCategory')

// 文章
export const getArtivallist = (data) => getData(prefix + '/artical/getList', data, 'post')

// 文章详情
export const getArticalDetail = (data) => getData(prefix + '/artical/getDetail', data)

// 文章保存
export const saveArtival = (data) => getData(prefix + '/artical/save', data, 'post')

// 赞文章
export const zanArtical = data => getData(prefix + '/artical/zan', data, 'post')

// 图片上传
export const upload = (data) => getData(prefix + '/upload', data, 'post', {
  contentType: 'multipart/form-data'
})

// 用户
// 用户注册
export const signUp = data => getData(prefix + '/user/signUp', data, 'post')
// 登入
export const signIn = data => getData(prefix + '/user/signIn', data, 'post')
// 登出
export const signOut = () => getData(prefix + '/user/signOut', {}, 'post')

// 评论
// 提交评论
export const submitComment = data => getData(prefix + '/comment/submit', data, 'post')
export const getCommentList = data => getData(prefix + '/comment/getList', data, 'post')
