import utils from '@/utils'

export const userLookUp = async function (stuId) {
  return utils.request({
    invoke: utils.api.requestLookUpUser,
    params: {
      stuId: stuId
    },
    result: null
  })
    .then(res => {
      return Promise.resolve(res.data.User.name)
    })
}
