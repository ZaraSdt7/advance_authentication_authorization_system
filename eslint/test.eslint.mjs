import eslintPluginJest from 'eslint-plugin-jest';

export const NestTestConfigs = {
  files: ['**/*.spec.ts', 'test/**'],
  // plugins: [ 'jest' ],
  // extends: [ 'plugin:jest/recommended' ],
  plugins: { jest: eslintPluginJest },
  rules: {
    '@typescript-eslint/unbound-method': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
