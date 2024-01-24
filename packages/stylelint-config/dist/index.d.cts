declare const _default: {
    extends: string[];
    plugins: string[];
    overrides: {
        files: string[];
        customSyntax: string;
    }[];
    ignoreFiles: string[];
    rules: {
        'import-notation': null;
        'selector-not-notation': null;
        'no-descending-specificity': null;
        'selector-pseudo-element-no-unknown': (boolean | {
            ignorePseudoElements: string[];
        })[];
        'selector-pseudo-class-no-unknown': (boolean | {
            ignorePseudoClasses: string[];
        })[];
        'function-no-unknown': (boolean | {
            ignoreFunctions: string[];
        })[];
        'order/properties-order': string[];
    };
};

export { _default as default };
