var rules = {
    'jsx-uses-react': require('./lib/rules/no-for-of'),
};

module.exports = {
    rules: rules,
    configs: {
        recommended: {
            plugins: [
                'syntax'
            ],
            rules: {
                'react/display-name': 2,
            }
        },
        all: {
            plugins: [
                'syntax'
            ],
            rules: rules
        }
    }
};
