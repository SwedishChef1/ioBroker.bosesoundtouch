module.exports = {
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "script",
        "ecmaFeatures": {
            "impliedStrict": true
        },
    },
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "eol-last": ["error", "always"],
        "no-trailing-spaces": ["error"]
    }
};
