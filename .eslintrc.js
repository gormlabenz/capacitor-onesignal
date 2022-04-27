module.exports = {
  extends: [
    'prettier',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    './.eslintrc-auto-import.json',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'vue/multi-word-component-names': 0,
  },
}
