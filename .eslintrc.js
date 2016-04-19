module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  globals: {
    'BMap': true
  },
  // add your custom rules here
  'rules': {
    "quotes": [
      "warn",
      "single"
    ],
    "no-undef": 0,
    "semi": 0,
    "space-before-function-paren": 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
