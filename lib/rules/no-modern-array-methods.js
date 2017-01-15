module.exports = {
    meta: {
        docs: {
            description: 'Disallow use of modern Array methods',
            category: 'ES2015+ features',
            recommended: false
        },
        schema: [{
            enum: ['always', 'never']
        }]
    },

    create: function (context) {

        var configuration = context.options[0] || 'never';
        var message = 'modern Array methods are not allowed';
        var methodNames = ['copyWithin', 'find', 'findIndex', 'fill', 'keys', 'values', 'entries'];

        return {
            CallExpression: function(node) {
                if (configuration === 'always') {
                    if (node.callee.type === 'MemberExpression') {
                        var prop = node.callee.property;
                        if (prop.type === 'Identifier' && methodNames.indexOf(prop.name) !== -1) {
                            context.report({
                                node: node,
                                message: message,
                            });
                        }
                    }
                }
            },
        };
    }
};
