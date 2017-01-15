var rule = require('../../../lib/rules/no-modern-string-methods');
var RuleTester = require('eslint').RuleTester;

var parserOptions = {
    ecmaVersion: 2015,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        allowImportExportEverywhere: false
    }
};

var ruleTester = new RuleTester();
var errors = ['modern String methods are not allowed'];

var methodNames = ['codePointAt', 'normalize', 'repeat', 'startsWith', 'endsWith', 'includes'];

ruleTester.run('no-modern-string-methods', rule, {
    valid: [
        ...methodNames.map(function (name) {
            return {
                code: `foo.${name}();`,
                options: ['never'],
                parserOptions: parserOptions
            };
        }),
        ...methodNames.map(function (name) {
            return {
                code: `foo.bar.${name}();`,
                options: ['never'],
                parserOptions: parserOptions
            };
        }),
    ],
    invalid: [
        ...methodNames.map(function (name) {
            return {
                code: `foo.${name}();`,
                options: ['always'],
                parserOptions: parserOptions,
                errors: errors
            };
        }),
        ...methodNames.map(function (name) {
            return {
                code: `foo.bar.${name}();`,
                options: ['always'],
                parserOptions: parserOptions,
                errors: errors
            };
        }),
    ],
});
