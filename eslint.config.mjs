import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';


/** @type {import('eslint').Linter.Config[]} */
export default [
  daStyle,
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];

