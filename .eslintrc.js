/* eslint-disable  */
const mdxRule = require('eslint-plugin-rulesdir')
mdxRule.RULES_DIR = 'eslint/mdx/rule'

require('ts-node').register()

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-hooks', 'react', '@typescript-eslint', 'rulesdir'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: '*.mdx',
      parser: 'eslint-mdx', // enable `eslint-mdx` manually if it does not work
      extends: ['plugin:mdx/recommended'],
      rules: {
        'rulesdir/mdx-components': 'error',
        'rulesdir/mdx-frontmatter-participants': 'error',
        'rulesdir/mdx-frontmatter-team': 'error',
      },
    },
  ],
}
