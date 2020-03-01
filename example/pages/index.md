# ${state.title}

[@magic](https://magic.github.io/core)-client library:
${state.description}

<GitBadges>magic-libraries/gql</GitBadges>

<h3 id="installation">installation</h3>

<Pre>npm install --save-exact @magic-libraries/gql</Pre>

<h3 id="usage">usage</h3>

in a page/component, just use the lib.gql functions

<Pre>
const query = lib.gql(`
query getHuman($id: Int = 3) {
  human(id: $id) {
    name
    height
  }
}`)

const jsonString = query({ id: 1 })
</Pre>

jsonString now is valid json:

<Pre>
{
  'query': `query getHuman($id: Int = 3) {
    human(id: $id) {
      name
      height
    }
  }`,
  'variables': { id: '1' },
  'operationName':'getHuman'
}
</Pre>

<h3 id="source">source</h3>

the source for this page is in the
[example directory](https://github.com/magic-libraries/gql/tree/master/example),
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
