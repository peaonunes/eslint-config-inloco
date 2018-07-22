module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'settings': {
    'import/resolver': {
      'node': {
        'paths': ['src']
      }
    }
  },
  'rules': {
    'semi': ['error', 'never'],
    'react/sort-comp': ['off', 'always'],
    'react/forbid-prop-types': ['off', 'always'],
    'jsx-a11y/label-has-for': ['off', 'always'],
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  'plugins': ['jest'],
  'env': {
    'jest/globals': true
  }
};