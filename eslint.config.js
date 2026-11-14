import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['build/**', '.tools/**', '.npm-cache/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
);
