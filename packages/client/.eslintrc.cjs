module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue'],
      extends: [
        'plugin:vue/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:vuejs-accessibility/recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: ['vue', 'vuejs-accessibility', '@typescript-eslint'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
          },
        },
      },
      rules: {
        'import/prefer-default-export': 'off',
        'no-restricted-exports': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
};
