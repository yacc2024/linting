import jsLint from '@eslint/js'
import tsLint from 'typescript-eslint'
import vueLint from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  ...vueLint.configs['flat/essential'],
  {
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'], // 允许使用any
      'vue/multi-word-component-names': ['off'], // 允许组件命名用单个词
      'no-extra-semi': ['off'],
      'no-undef': ['off'], // ts全局类型报错
      'no-unused-vars': ['off'], // 防止冲突，用ts检查
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }], // 允许 _参数没使用
      '@typescript-eslint/ban-types': ['off'],
      'no-case-declarations': ['off'], // switch case 里面其实可以写变量，没啥问题
    },
    ignores: ['node_modules/**', 'dist/**', 'output/**', 'public/**'],
  },
]
