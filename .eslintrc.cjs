module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    "quotes": ["error", "single"],
    'no-debugger': 'warn',
    'no-console': [
      'warn',
      {
        allow: ['error']
      }
    ],
    'no-undef': 'off',
    'no-var': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'prefer-const': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'vue/no-unused-vars': [
      'error',
      {
        ignorePattern: '^_'
      }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-parsing-error': [
      'error',
      {
        'control-character-reference': false
      }
    ],
    'vue/no-v-html': 'off',
    'vue/v-on-event-hyphenation': 'off'
  }
}
