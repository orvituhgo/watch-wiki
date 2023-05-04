module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    // 'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:react/recommended',
  ],
  overrides: [],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': 'off',
  },
};
