// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: ['plugin:vue/recommended'],
    plugins: [
        'vue'
    ],
    rules: {
        'for-direction': 'error',
        'getter-return': 'error',
        'no-constant-condition': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'no-empty': ["error", { "allowEmptyCatch": true }],
        'no-cond-assign': ['error', 'except-parens'],
        'no-compare-neg-zero': 'error',



        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'curly': ['error', 'all'],
        'consistent-return': 'error',
        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'never'
            }
        ],
        'no-console': 'off',
        'no-unused-vars': ['warn'],
        'vue/script-indent': ['error', 4, { 'baseIndent': 1 }],
        'vue/valid-v-model': 'off',
        'no-var': 'error',
        'prefer-const': 'error',
        'no-spaced-func': 'error',
        'array-callback-return': 'error',
        'lines-between-class-members': ['error', 'always'],
        'block-scoped-var': 'error',
        'no-multi-spaces': 'error',
        'brace-style': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-whitespace-before-property': 'error',
        'lines-around-comment': ['error', { 'afterBlockComment': false }],
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1, 'maxBOF': 0 }],
        'space-before-blocks': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'dot-location': ['error', 'property'],
        'eol-last': ['error', 'always'],
        'function-paren-newline': ['error', 'multiline'],
        'comma-spacing': ['error', {
            'before': false,
            'after': true,
        }],
        'spaced-comment': ['error', 'always'],
        'block-spacing': ['error', 'always'],
        'space-unary-ops': ['error', { "words": true, "nonwords": false }],
        'space-before-function-paren': ['error', 'never'],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'space-in-parens': ['error', 'never']
    }
}
