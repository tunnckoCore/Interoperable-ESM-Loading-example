// run with:
// node --experimental-modules example.mjs
// node -r esm example.mjs
const { foo, qux } = require('foo-qux')

console.log(foo, qux)
