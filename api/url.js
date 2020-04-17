const prefix = '/api'

/**
 * 获取分类列表url
 */
export const getCategoryListUrl = `${prefix}/getCategory`;

/**
 * 获取文章列表url
 */
export const getArticalListUrl = `${prefix}/artical/getList`;

/**
 * 获取文章详情url
 */
export const getDetailUrl = `${prefix}/artical/getDetail`;

/**
 * 文章保存url
 */
export const saveArticalUrl = `${prefix}/artical/save`;

/**
 * 赞文章url
 */
export const zanArticalUrl = `${prefix}/artical/zan`;

/**
 * 图片上传url
 */
export const uploadImageUrl = `${prefix}/upload`;

/**
 * 用户注册url
 */
export const signUpUrl = `${prefix}/user/signUp`;

/**
 * 用户登入url
 */
export const signInUrl = `${prefix}/user/signIn`;

/**
 * 用户登出url
 */
export const signOutUrl = `${prefix}/user/signOut`;

/**
 * 提交评论url
 */
export const submitCommentUrl = `${prefix}/comment/submit`;

/**
 * 获取评论列表url
 */
export const getCommentListUrl = `${prefix}/comment/getList`;
