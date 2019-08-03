const base = ''
export const DEVELOPMENT = true

const apiBase = (url, params) => {
  if (DEVELOPMENT) {
    return new Promise(resolve => resolve())
  } else {
    return new Promise(resolve => {
      wx.request({
        url: `${base}${url}`,
        data: params,
        success (res) {
          resolve(res)
        }
      })
    })
  }
}

/**
 * url: /login
 * identity: 0 for unregistered, 1 for student, 2 for teacher.
 * @param {Object} params
 * @param {String} params.code the code returned by weixin.
 * @returns {Promise<{data: {identity: number, id: number, name: String}}>}
 */
export const requestLogin = params => {
  return apiBase('/login', params)
}
/**
 * url: /register
 * @param {Object} params
 * @param {String} params.code
 * @param {String} params.stuId
 * @returns {Promise<{data: {status: number}}>}
 */
export const requestRegister = params => {
  return apiBase('/register', params)
}
