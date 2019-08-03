import {DEVELOPMENT} from '@/utils/api'

export const request = obj => {
  obj.invoke()
    .then(res => {
      if (DEVELOPMENT) {
        return new Promise(resolve =>
          resolve({data: obj.result})
        )
      } else {
        return new Promise(resolve => resolve(res))
      }
    })
}
