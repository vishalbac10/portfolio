import eslintPluginReact from 'eslint-plugin-react';
import js from '@eslint/js';
import next from 'eslint-config-next';

export default [
  js.configs.recommended,
  next,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      // Turn off the rule for unescaped characters in JSX
      'react/no-unescaped-entities': 'off',

      // Make unused variables a warning instead of an error
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
