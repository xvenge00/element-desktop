module.exports = {
    plugins: [
        "matrix-org",
    ],
    extends: [
        "plugin:matrix-org/javascript",
    ],
    parserOptions: {
        ecmaVersion: 2021,
    },
    env: {
        es6: true,
        node: true,
        // we also have some browser code (ie. the preload script)
        browser: true,
    },
    rules: {
        "quotes": "off",
        "indent": "off",
        "prefer-promise-reject-errors": "off",
        "no-async-promise-executor": "off",
    }
}
