module.exports = {
    root: true,
    env: {
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ]
}