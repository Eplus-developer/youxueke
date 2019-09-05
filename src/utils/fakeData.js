
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
    location: '文史楼302'
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

export const BOOK_RESPONSE_SUCCESSFUL = true

export const GET_COURSE_LIST_BY_BOOKER = {
  status: 'true',
  Course: [
    {
      id: 1,
      title: '计算机网络',
      des: '一门绝世好课',
      lecturer: '10175101259',
      date: '2019-01-01',
      location: '文史楼302'
    },
    {
      id: 2,
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

export const GET_COURSE_LIST_BY_DATE = GET_COURSE_LIST_BY_BOOKER
