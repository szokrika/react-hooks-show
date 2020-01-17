module.exports = {
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  settings: {
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      version: '16.12.0'
    }
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      templateStrings: true,
      arrowFunctions: true,
      blockBindings: true,
      modules: true,
      forOf: true,
      jsx: true
    },
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', 'jsx-a11y'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0, { forbid: ['any'] }],
    'react/prop-types': 0,
    'react/destructuring-assignment': 'off',
    'space-before-function-paren': 'off',
    'max-classes-per-file': ['error', 3],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'jsx-quotes': 'off',
    'no-async-promise-executor': 'off'
  }
}
