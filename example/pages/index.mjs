export const View = state => [
  h2(state.title),

  p([
    Link({ to: 'https://magic.github.io/core' }, '@magic'),
    '-client library: ',
    state.description,
  ]),

  GitBadges('magic-libraries/gql'),

  h3({ id: 'installation' }, 'installation'),
  Pre('npm install --save-exact magic-libraries/gql'),

  h3({ id: 'usage' }, 'usage'),
  p('in a page/component, just use the lib.gql functions'),

  Pre(`
lib.gql(\`
query getHuman($id: Int = 3) {
  human(id: $id) {
    name
    height
  }
}\`)`),

  p('returns'),
  Pre(
    lib.gql(`
query getHuman($id: Int = 3) {
  human(id: $id) {
    name
    height
  }
}`)(1),
  ),

  h3({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-libraries/json/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),

  LightSwitch(state),
]
