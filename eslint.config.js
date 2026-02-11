import prettierConfig from 'eslint-config-prettier'
import nextConfig from 'eslint-config-next/core-web-vitals'
import tseslint from 'typescript-eslint'

const config = [
    ...nextConfig,
    ...tseslint.configs['recommended'],
    prettierConfig,
    {
        ignores: ['eslint.config.js'],
        rules: {
            '@typescript-eslint/naming-convention': [
                'warn',
                {
                    selector: 'variable',
                    format: [
                        'camelCase',
                        'PascalCase',
                        'snake_case',
                        'UPPER_CASE',
                    ],
                },
            ],
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },
    {
        files: ['next.config.js', 'src/pages/_app.tsx'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
]

export default config
// __afill_20260316_1914__
// __afill_20260808_2032__
// __afill_20260211_1925__
