module.exports = {
    meta: {
        docs: {
            description: 'Disallow use of async/await',
            category: 'ES2015+ features',
            recommended: false
        },
        schema: [{
            enum: ['always', 'never']
        }]
    },

    create: function (context) {

        var configuration = context.options[0] || 'never';
        var message = 'computed properties are not allowed';

        return {
            Property: function(node) {
                if (node.computed && configuration === 'always') {
                    context.report({
                        node: node,
                        message: message,
                    });
                }
            },
        };
    }
};
