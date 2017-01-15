module.exports = {
    meta: {
        docs: {
            description: 'Disallow use of for-of loop iteration',
            category: 'ES2015+ features',
            recommended: false
        },
        schema: [{
            enum: ['always', 'never']
        }]
    },

    create: function (context) {

        var configuration = context.options[0] || 'never';

        return {
            ForOfStatement: function(node) {
                if (configuration === 'always') {
                    context.report({
                        node: node,
                        message: 'for-of statements are not allowed',
                    });
                }
            }
        };
    }
};
