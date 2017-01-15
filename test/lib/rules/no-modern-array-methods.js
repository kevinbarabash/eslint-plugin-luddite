var rule = require('../../../lib/rules/no-modern-array-methods');
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
var errors = ['modern Array methods are not allowed'];

var methodNames = ['copyWithin', 'find', 'findIndex', 'fill', 'keys', 'values', 'entries'];

ruleTester.run('no-modern-array-methods', rule, {
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
