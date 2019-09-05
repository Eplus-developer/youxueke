const base = 'http://47.103.95.85:8080'
export const DEVELOPMENT = true

const apiBase = (url, params) => {
  if (DEVELOPMENT) {
    return new Promise(resolve => resolve())
  } else {
    // console.log(`url: ${url}: params: ${params}`)
    return new Promise(resolve => {
      wx.request({
        url: `${base}${url}`,
        data: params,
        method: 'POST',
        success (res) {
          // console.log(res)
          resolve(res)
        }
      })
    })
  }
}

/**
 * these are the structures used in the apis.
 * @typedef {{stuId: String, courseId: number, phone: String}} Booking
 * @typedef {{id: number, title: String, des: String, lecturer: String, date: String, location: String}} Course
 * @typedef {{teaId: String, courseId: number, phone: String}} Release
 * @typedef {{id: number, topic_id: number, des: String, author: String, likes: number}} Reply
 * @typedef {{id: number, title: String, des: String, author: String, likes: number, replies: number}} Topic
 * @typedef {{ID: String, name: String, open_id: String, identity: number}} User
 * @typedef {{identity: number, name: String, id: String}} userInfo
 */

// ======= Booking =======
/**
 * url: /booking/list
 * @typedef {{code: String}} Course
 * @param {none} params
 * @returns {Promise<{status: String, Booking: Array<Booking>}>}
 */
export const requestBookingList = params => {
  return apiBase('/booking/list', params)
}

/**
 * url: /booking/findCourseByStu
 * @param {Object} params
 * @param {String} params.stuId
 * @returns {Promise<{status: String, Course: Array<Course>}>}
 */
export const requestCourseByStudent = params => {
  return apiBase('/booking/findCourseByStu', params)
}

/**
 * url: /booking/add
 * @param {Object} params
 * @param {String} params.stuId
 * @param {number} params.courseId
 * @param {String} params.phone
 * @returns {Promise<>}
 * returns true if the booking is successful
 */
export const requestBook = params => {
  return apiBase('/booking/add', params)
}

// ======= course =======
/**
 * url: /course/list
 * @param {Object} params
 * @returns {Promise<{status: String, Course: Array<Course>}>}
 */
export const requestAllCourse = params => {
  return apiBase('/course/list', params)
}

/**
 * url: /course/findCourseById
 * @param {Object} params
 * @param {number} params.courseId
 * @returns {Promise<{status: String, Course: Course}>}
 */
export const requestCourseById = params => {
  return apiBase('/course/findCourseById', params)
}

/**
 * url: /course/findCourseByDate
 * @param {Object} params
 * @param {String} params.date
 * @returns {Promise<{status: String, Course: Array<Course>}>}
 */
export const requestCourseByDate = params => {
  return apiBase('/course/findCourseByDate', params)
}

/**
 * url: /course/findCourseByTitle
 * @param {Object} params
 * @param {String} params.title
 * @returns {Promise<{status: String, Course: Course}>}
 */
export const requestCourseByTitle = params => {
  return apiBase('/course/findCourseByTitle', params)
}

/**
 * url: /course/add
 * @param {Object} params
 * @param {String} params.title
 * @param {String} params.des
 * @param {String} params.stuId
 * @param {String} params.location
 * @param {String} params.date
 * @returns {Promise<{status: String}>}
 */
export const requestAddCourse = params => {
  return apiBase('/course/add', params)
}

// ======= release =======
/**
 * url: /release/list
 * @param {none} params
 * @returns {Promise<{status: String, Release: Release}>}
 */
export const requestReleaseList = params => {
  return apiBase('/release/list', params)
}

/**
 * url: /release/findCourseByTea
 * @param {Object} params
 * @param {String} params.stuId
 * @returns {Promise<{status: String, Course: Course}>}
 */
export const requestCourseByTeacher = params => {
  return apiBase('/release/findCourseByTea', params)
}

/**
 * url: /release/add
 * @param {Object} params
 * @param {String} params.stuId
 * @param {number} params.courseId
 * @param {String} params.phone
 * @returns {Promise<>}
 * returns true if the info is successfully inserted, false vice versa.
 */
export const requestRelease = params => {
  return apiBase('/release/add', params)
}

// ======= reply =======
/**
 * url: /reply/add
 * @param {Object} params
 * @param {number} params.topicId
 * @param {String} params.des
 * @param {String} params.stuId
 * @returns {Promise<{status: String, replyID: number}>}
 */
export const requestReply = params => {
  return apiBase('/reply/add', params)
}

/**
 * url: /reply/addLikes
 * @param {Object} params
 * @param {number} params.replyId
 * @param {String} params.stuId
 * @returns {Promise<>}
 * returns true if successfully sent, false vice versa.
 */
export const requestAddLikes = params => {
  return apiBase('/reply/addLikes', params)
}

/**
 * url: /reply/getSumLikes
 * @param {Object} params
 * @param {number} params.replyId
 * @returns {Promise<{status: String, Sum: number}>}
 */
export const requestSumLikes = params => {
  return apiBase('/reply/getSumLikes', params)
}

// ======= topic =======
/**
 * url: /topic/list
 * @param {none} params
 * @returns {Promise<{status: String, Topic: Array<Topic>}>}
 */
export const requestTopicList = params => {
  return apiBase('/topic/list', params)
}

/**
 * url: /topic/findTopicById
 * @param {Object} params
 * @param {number} params.topicId
 * @returns {Promise<{status: String, Topic: Topic}>}
 */
export const requestTopicById = params => {
  return apiBase('/topic/findTopicById', params)
}

/**
 * url: /topic/findTopicByAuthor
 * @param {Object} params
 * @param {String} params.stuId
 * @returns {Promise<{status: String, Topic: Topic}>}
 */
export const requestTopicByAuthor = params => {
  return apiBase('/topic/findTopicByAuthor', params)
}

/**
 * url: /topic/add
 * @param {Object} params
 * @param {String} params.title
 * @param {String} params.des
 * @param {String} params.stuId
 * @returns {Promise<{status: String, topicID: number}>}
 */
export const requestAddTopic = params => {
  return apiBase('/topic/add', params)
}

/**
 * url: /topic/addLikes
 * @param {Object} params
 * @param {String} params.stuId
 * @param {number} params.topicId
 * @returns {*|Promise<>}
 * true if successfully sent
 */
export const requestTopicAddLikes = params => {
  return apiBase('/topic/addLikes', params)
}

/**
 * url: /topic/getSumLikes
 * @param {Object} params
 * @param {number} params.topicId
 * @returns {Promise<{status: String, Sum: number}>}
 */
export const requestTopicSumLikes = params => {
  return apiBase('/topic/getSumLikes', params)
}

/**
 * url: /topic/getSumReplies
 * @param {Object} params
 * @param {number} params.topicId
 * @returns {Promise<{status: String, Sum: number}>}
 */
export const requestTopicSumReplies = params => {
  return apiBase('/topic/getSumReplies', params)
}

/**
 * url: /topic/uploadPic
 * @param {Object} params
 * @param {number} params.topicId
 * @param {String} params.url
 * @returns {Promise<>}
 * returns true
 */
export const requestUploadPicture = params => {
  return apiBase('/topic/uploadPic', params)
}

// ======= user =======
/**
 * url: /user/list
 * @param {none} params
 * @returns {Promise<{status: String, User: User}>}
 */
export const requestUserList = params => {
  return apiBase('/user/list', params)
}

/**
 * url: /user/login
 * identity: 0 for unregistered, 1 for student, 2 for teacher.
 * @param {Object} params
 * @param {String} params.js_code the code returned by weixin.
 * @returns {Promise<{status: String, userInfo: userInfo}>}
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
 * @returns {Promise<{status: Boolean}>}
 * return true if successfully inserted
 */
export const requestRegister = params => {
  return apiBase('/user/register', params)
}

/**
 * url: /user/uploadAvatar
 * @param {Object} params
 * @param {String} params.url
 * @param {String} params.stuId
 * @returns {*|Promise<>}
 * returns true.
 */
export const requestUploadAvatar = params => {
  return apiBase('/user/uploadAvatar', params)
}
