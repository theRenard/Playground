module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [],
  // add your custom rules here
  ignorePatterns: ["/static/**/*.*"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'lines-between-class-members': 'off',
    'padded-blocks': 'off',
    'no-param-reassign': 'off',
    'max-len': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
    ],

  },
}
