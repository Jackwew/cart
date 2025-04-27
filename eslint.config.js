import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
    { ignores: ['dist', 'node_modules', 'public'] },
    eslintPluginPrettierRecommended,
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'prettier/prettier': 'error',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'react/display-name': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/strict-boolean-expressions': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/return-await': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            'prefer-regex-literals': 'off',
            'prefer-promise-reject-errors': 'off',
            '@typescript-eslint/promise-function-async': 'off',
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/consistent-type-imports': 'off',
            '@typescript-eslint/prefer-nullish-coalescing': 'off',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
            '@typescript-eslint/no-confusing-void-expression': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
            'n/no-callback-literal': 'off',
            'no-async-promise-executor': 'off',
            '@typescript-eslint/no-dynamic-delete': 'off',
            'react-hooks/rules-of-hooks': 'off',
            'no-empty': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'no-unsafe-optional-chaining': 'off',
        },
    },
)
