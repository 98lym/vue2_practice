module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'off',
      {
        tabWidth: 2,
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        printWidth: 120,
        bracketSameLine: false,
        bracketSpacing: true,
      },
    ],
  },
}
