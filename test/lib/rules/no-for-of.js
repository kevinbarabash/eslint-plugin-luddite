var rule = require('../../../lib/rules/no-for-of');
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
ruleTester.run('no-for-of', rule, {
    valid: [
        {
            code: 'console.log("hello");',
            options: ['always'],
            parserOptions: parserOptions,
        },
        {
            code: 'for (const x of [1,2,3]) {}',
            options: ['never'],
            parserOptions: parserOptions,
        }
    ],
    invalid: [
        {
            code: 'for (const x of [1,2,3]) {}',
            options: ['always'],
            parserOptions: parserOptions,
            errors: [{
                message: 'for-of statements are not allowed'
            }]
        }
    ],
});
