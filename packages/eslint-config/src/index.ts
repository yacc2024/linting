export default {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['node_modules/', 'dist/', 'output/', 'public/'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'], // 允许使用any
    'vue/multi-word-component-names': ['off'], // 允许组件命名用单个词
    'no-extra-semi': ['off'],
    'no-undef': ['off'], // ts全局类型报错
    '@typescript-eslint/ban-types': ['off'],
    'no-case-declarations': ['off'], // switch case 里面其实可以写变量，没啥问题
  },
}
