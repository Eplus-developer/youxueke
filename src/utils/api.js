const base = 'http://47.103.95.85:8080'
export const DEVELOPMENT = false

const apiBase = (url, params) => {
  if (DEVELOPMENT) {
    return new Promise(resolve => resolve())
  } else {
    console.log(`url: ${url}: params: ${params}`)
    return new Promise(resolve => {
      wx.request({
        url: `${base}${url}`,
        data: params,
        method: 'POST',
        success (res) {
          console.log(res)
          resolve(res)
        }
      })
    })
  }
}

/**
 * url: /user/login
 * identity: 0 for unregistered, 1 for student, 2 for teacher.
 * @param {Object} params
 * @param {String} params.js_code the code returned by weixin.
 * @returns {Promise<{data: {identity: number, id: number, name: String}}>}
 */
export const requestLogin = params => {
  return apiBase('/user/login', params)
}
/**
 * url: /user/register
 * @param {Object} params
 * @param {String} params.js_code
 * @param {String} params.stuId
 * @param {String} params.name
 * @returns {Promise<{data: {status: Boolean}}>}
 */
export const requestRegister = params => {
  return apiBase('/user/register', params)
}

/**
 * url: /history
 * @param {Object} params
 * @returns {Promise<{Array}>}
 */
export const requestHistory = params => {
  return apiBase('/history', params)
}

/**
 * url: /posted
 * @param params
 * @returns {*|Promise<{}>}
 */
export const requestPosted = params => {
  return apiBase('/posted', params)
}

/**
 * url: /booked
 * @param params
 * @returns {*|Promise<{}>}
 */
export const requestBooked = params => {
  return apiBase('/booked')
}

/**
 * url: /asked
 * @param params
 * @returns {*|Promise<{}>}
 */
export const requestAsked = params => {
  return apiBase('/asked', params)
}

/**
 * url: /post
 * @param params
 * @returns {*|Promise<{}>}
 */
export const requestPost = params => {
  return apiBase('/post', params)
}

/**
 * url: /ask
 * @param params
 * @returns {*|Promise<{}>}
 */
export const requestAsk = params => {
  return apiBase('/ask', params)
}

/**
 * url: /courseList
 * @param {Object} params         date
 * @returns {*|Promise<{}>}
 */
export const requestCourseList = params => {
  return apiBase('/courseList', params)
}

/**
 * url: /subject
 * @param params
 * @returns {*|Promise<>}
 */
export const requestSubject = params => {
  return apiBase('/subject', params)
}

/**
 * url: /chapter
 * @param {Object} params
 * @returns {*|Promise<{}>}
 */
export const requestChapter = params => {
  return apiBase('/chapter', params)
}

/**
 * url: /question
 * @param params
 * @returns {*|Promise<{}>}
 */
export const requestQuestion = params => {
  return apiBase('/question', params)
}

/**
 * url: /topic
 * @param {Object} params
 * @returns {*|Promise<{}>}
 */
export const requestTopic = params => {
  return apiBase('/topic', params)
}

/**
 * url: /reply
 * @param {Object} params
 * @returns {*|Promise<{}>}
 */
export const requestReply = params => {
  return apiBase('/reply', params)
}
