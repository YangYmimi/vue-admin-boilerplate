// Generate url query to object
export function generateQueryMap(queryStrs) {
  let queryFormatted = {}
  if (queryStrs) {
    // cur url params are not empty
    const querySplited = queryStrs.split("&")
    querySplited.forEach(item => {
      var element = item.split("=")
      queryFormatted[element[0]] = element[1]
    })
  }

  return queryFormatted
}
