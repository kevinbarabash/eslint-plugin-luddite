var rule = require('../../../lib/rules/no-computed-props');
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
var errors = ['computed properties are not allowed'];

ruleTester.run('no-computed-props', rule, {
    valid: [
        { code: 'var obj = {x: 5}', options: ['always'], parserOptions: parserOptions },
        { code: 'var obj = {y() {return 10;}}', options: ['always'], parserOptions: parserOptions },
        { code: 'var obj = {[z + "foo"]: "bar"}', options: ['never'], parserOptions: parserOptions },
    ],
    invalid: [
        { code: 'var obj = {[z + "foo"]: "bar"}', options: ['always'], parserOptions: parserOptions, errors: errors },
    ],
});
