declare const _default: {
    env: {
        browser: boolean;
        es2021: boolean;
        node: boolean;
    };
    extends: string[];
    parser: string;
    parserOptions: {
        ecmaVersion: string;
        sourceType: string;
        parser: string;
        ecmaFeatures: {
            jsx: boolean;
        };
    };
    plugins: string[];
    ignorePatterns: string[];
    rules: {
        '@typescript-eslint/no-explicit-any': string[];
        'vue/multi-word-component-names': string[];
        'no-extra-semi': string[];
        'no-undef': string[];
        '@typescript-eslint/ban-types': string[];
    };
};

export { _default as default };
