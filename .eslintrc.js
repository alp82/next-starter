module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    'ecmaFeatures': {
      'jsx': true
    },
    sourceType: 'module',  // Allows for the use of imports
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/babel',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'jest',
  ],
  rules: {
    'semi': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'no-public',
    }],
    '@typescript-eslint/explicit-function-return-type': ['warn', {
      allowExpressions: true,
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'none'
      },
    }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/prefer-interface': 0,
    'react/no-unescaped-entities': 0,
  },
};