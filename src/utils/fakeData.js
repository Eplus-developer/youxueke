
export const REQUEST_LOGIN_RESPONSE_UNREGISTERED = {
  status: 'false'
}

export const REQUEST_LOGIN_RESPONSE_STUDENT = {
  status: 'true',
  userInfo: {
    identity: 1,
    id: '10175101259',
    name: '吴同学'
  }
}

export const REQUEST_LOGIN_RESPONSE_TEACHER = {
  status: 'true',
  userInfo: {
    identity: 2,
    id: '10175101176',
    name: '陈老师'
  }
}
export const REQUEST_LOGIN_RESPONSE_ADMIN = {
  status: 'true',
  userInfo: {
    identity: 3,
    id: '11977',
    name: 'devil'
  }
}

export const REQUEST_REGISTER_RESPONSE_SUCCESSFUL = true

export const SUCCESS_RESPONSE_PIECE = {
  status: 'true'
}

export const FAIL_RESPONSE_PIECE = {
  status: 'false'
}

export const COURSE_DETAIL_RESPONSE = {
  status: 'true',
  Course: {
    id: 1,
    title: '计算机网络',
    des: '一门绝世好课',
    lecturer: '10175101259',
    date: '2019-01-01',
    location: '文史楼302',
    verification: false,
    category: 0
  }
}

export const GET_COURSE_LIST_BY_LECTURER = {
  status: 'true',
  Release: [
    {
      id: 4,
      title: '计算机网络',
      des: '一门绝世好课',
      lecturer: '10175101259',
      date: '2019-01-01',
      location: '文史楼302',
      category: 0
    },
    {
      id: 5,
      title: '操作系统',
      des: '一门绝世好课',
      lecturer: '10175101259',
      date: '2019-01-01',
      location: '文史楼302',
      category: 1
    },
    {
      id: 3,
      title: '数据库',
      des: '一门绝世好课',
      lecturer: '10175101259',
      date: '2019-01-01',
      location: '文史楼302',
      category: 1
    }
  ]
}

export const BOOK_RESPONSE_SUCCESSFUL = true

export const UPLOAD_AVATAR_RESPONSE = true

export const ADD_RELEASE_RESPONSE = true

export const VERIFY_RESPONSE = true

export const CHANGE_RESPONSE = true

export const ADD_COURSE_RESPONSE_SUCCESSFUL = {
  status: 'true',
  courseID: 1
}

export const GET_COURSE_LIST_BY_BOOKER = {
  status: 'true',
  Course: [
    {
      id: 1,
      title: '计算机网络',
      des: '一门绝世好课',
      lecturer: '10175101259',
      date: '2019-01-01',
      location: '文史楼302',
      verification: true
    },
    {
      id: 2,
      title: '操作系统',
      des: '一门绝世好课',
      lecturer: '10175101259',
      date: '2019-01-01',
      location: '文史楼302',
      verification: true
    },
    {
      id: 3,
      title: '数据库',
      des: '一门绝世好课',
      lecturer: '10175101259',
      date: '2019-01-01',
      location: '文史楼302',
      verification: false
    }
  ]
}

export const GET_COURSE_LIST_BY_DATE = GET_COURSE_LIST_BY_BOOKER

export const GET_COURSE_LIST_ADMIN = GET_COURSE_LIST_BY_BOOKER

export const ADD_QUESTION_RESPONSE_SUCCESSFUL = {
  status: 'true',
  topicID: 8
}
export const ADD_TOPIC_RESPONSE = true
export const DYNAMIC_LIST_DATA = {
  status: 'true',
  Topic: [
    {
      title: '计算机网络',
      des: '的份上就互不干扰覅搜电脑版奥斯卡计划表GV为 安而后发 阿内入会费爱的何润锋',
      author: '吴同学',
      likes: 66,
      replies: 88,
      id: 0
    },
    {
      title: '操作系统',
      des: '的份上就互不干扰覅搜电脑版奥斯卡计划表GV为 安而后发 阿内入会费爱的何润锋',
      author: '吴同学',
      likes: 6,
      replies: 8,
      id: 1
    },
    {
      title: '数据结构',
      des: '的份上就互不干扰覅搜电脑版奥斯卡计划表GV为 安而后发 阿内入会费爱的何润锋',
      author: '吴同学',
      likes: 55,
      replies: 66,
      id: 2
    }
  ]
}

export const GET_COURSE_LIST_BY_TITLE = {
  status: 'true',
  CourseList: [
    {
      id: 4,
      title: '计算机网络',
      des: '一门绝世好课',
      lecturer: '10175101259',
      date: '2019-01-01',
      location: '文史楼302'
    },
    {
      id: 5,
      title: '操作系统',
      des: '一门绝世好课',
      lecturer: '10175101259',
      date: '2019-01-01',
      location: '文史楼302'
    },
    {
      id: 3,
      title: '数据库',
      des: '一门绝世好课',
      lecturer: '10175101259',
      date: '2019-01-01',
      location: '文史楼302'
    }
  ]
}

export const GET_REPLY_LIST = {
  status: 'true',
  Reply: [
    {
      id: 1,
      topic_id: 2,
      des: '这个问题非常好',
      author: '张同学',
      type: 0,
      oldCommenter: '李同学',
      date: '2019-10-12'
    },
    {
      id: 6,
      topic_id: 0,
      des: '这个问题非常好,feichanglsj',
      author: '某同学',
      type: 1,
      oldCommenter: '',
      date: '2019-5-10'
    }
  ]
}
