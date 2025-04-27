module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.ts'],
      extends: ['airbnb-base', 'airbnb-typescript/base'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
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
        'no-restricted-exports': 0,
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
          },
        ],
      },
    },
  ],
};
