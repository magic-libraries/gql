# ${state.title}

[@magic](https://magic.github.io/core)-client gql library.

${state.description}

<GitBadges>@magic-libraries/gql</GitBadges>

### installation

`npm install --save-exact @magic-libraries/gql`

### usage

in a page/component, just use the lib.gql functions

```
const query = lib.gql(\`
query getHuman($id: Int = 3) {
  human(id: $id) {
    name
    height
  }
}\`)

const jsonString = query({ id: 1 })
```

jsonString now is valid json:

```
{
  'query': \`query getHuman($id: Int = 3) {
    human(id: $id) {
      name
      height
    }
  }\`,
  'variables': { id: '1' },
  'operationName':'getHuman'
}
```

### source

the source for this page is in the
[example directory](https://github.com/magic-libraries/gql/tree/master/example),
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
