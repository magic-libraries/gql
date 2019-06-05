const gql = query => {
  query = Array.isArray(query) ? query.join('').trim() : query.trim()
  const name = /(query|mutation) ?([\w\d-_]+)? ?\(.*?\)? \{/.exec(query)

  return variables => {
    const data = { query }

    if (variables) {
      data.variables = JSON.stringify(variables)
    }

    if (name && name.length && name[2]) {
      data.operationName = name[2]
    }

    return JSON.stringify(data)
  }
}

export default gql
