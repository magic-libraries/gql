import { is, tryCatch } from '@magic/test'
import gql from '../src/index.mjs'

const query = `
query getHuman($id: Int = 3) {
  human(id: $id) {
    name
    height
  }
}
`.trim()

const simpleQuery = `
human(id) {
  name
  height
}
`.trim()

const complexMutation = `
mutation putSuperHuman($name: String, $id: Int, $power: String, $adventures : Array = []) {
  superhuman(name: $name, id: $id, power: $power, adventures: $adventures) {
    name
    id
    adventures
    power
  }
}
`
const mutationArgs = {
  name: 'Spider Body',
  id: 1,
  power: 'Nets',
  adventures: ['adventure 1', 'adventure 2'],
}

const expect =
  '{"query":"query getHuman($id: Int = 3) {\n  human(id: $id) {\n    name\n    height\n  }\n}","variables":"1","operationName":"getHuman"}'

export default [
  { fn: () => gql, expect: is.fn, info: 'gql is a function' },
  { fn: () => gql(query), expect: is.fn, info: 'gql returns a query function' },
  { fn: () => gql(query)(), expect: is.str, info: 'gql called twice returns a string' },
  {
    fn: () => gql(query)(1),
    expect: t => {
      const res = JSON.parse(t)
      return res.variables === '1' && res.operationName === 'getHuman'
    },
    info: 'gql can jsonify queries',
  },
  {
    fn: () => gql(simpleQuery)(1),
    expect: t => {
      const res = JSON.parse(t)
      return res.variables === '1' && res.operationName === undefined
    },
    info: 'can handle queries without query keyword',
  },
  {
    fn: () => gql(complexMutation)(mutationArgs),
    expect: t => {
      const res = JSON.parse(t)
      const vars = JSON.parse(res.variables)
      return is.deep.equal(vars, mutationArgs)
    },
    info: 'can handle complex mutation',
  },
  {
    info: 'should create a query',
    fn: () => {
      const query = gql`
        query($number_of_repos: Int!) {
          viewer {
            name
            repositories(last: $number_of_repos) {
              nodes {
                name
              }
            }
          }
        }
      `

      const variables = { number_of_repos: 3 }
      const data = query(variables)

      const res = JSON.parse(data)
      return is.string(res.query) && is.deep.equal(variables, JSON.parse(res.variables))
    },
  },
  {
    info: 'should have a name',
    fn: () => {
      const query = gql`
        query foo($number_of_repos: Int!) {
          viewer {
            name
            repositories(last: $number_of_repos) {
              nodes {
                name
              }
            }
          }
        }
      `

      const variables = { number_of_repos: 3 }
      const data = query(variables)

      const res = JSON.parse(data)

      return (
        is.string(res.query) &&
        res.operationName === 'foo' &&
        is.deep.equal(variables, JSON.parse(res.variables))
      )
    },
  },
  {
    info: 'should have a name for mutations also',
    fn: () => {
      const query = gql`
        mutation CreateSomethingBig($input: Idea!) {
          createSomething(input: $input) {
            result
          }
        }
      `

      const res = JSON.parse(query())

      return is.string(res.query) && res.operationName === 'CreateSomethingBig'
    },
  },
  { fn: tryCatch(gql('{ invalid json }')()), expect: is.error, info: 'gql throws on invalid json' },
]
