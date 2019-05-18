module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:jest/recommended',
    'prettier'
  ],
  plugins: ['import', 'jest'],
  env: {
    node: true,
    'jest/globals': true
  },
  rules: {
    'comma-dangle': ['warn', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    'jest/no-disabled-tests': 'off',
    'jest/no-focused-tests': 'off',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  }
};
