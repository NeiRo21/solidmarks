// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
		// Note: there should be no other properties in this object
		ignores: ["dist/", "node_modules/", ".vscode/", ".idea/"],
	},
);
