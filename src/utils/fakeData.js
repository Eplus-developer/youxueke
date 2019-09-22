
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
    id: '10175101183',
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
