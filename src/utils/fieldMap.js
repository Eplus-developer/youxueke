export const fieldMap = (from, to, rules) => {
  for (let item of rules) {
    if (typeof (item) === 'string') {
      to[item] = from[item]
    } else if (typeof (item) === 'function') {
      item(from, to)
    }
  }
}
