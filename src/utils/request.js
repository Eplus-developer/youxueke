import {DEVELOPMENT} from '@/utils/api'

export const request = obj => {
  if (DEVELOPMENT) {
    return new Promise(resolve =>
      resolve({data: obj.result})
    )
  } else {
    return obj.invoke()
  }
}
