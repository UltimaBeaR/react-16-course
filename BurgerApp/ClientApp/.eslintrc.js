module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],

        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",

        "no-console": "off",
        "no-constant-condition": "off",

        "indent": "off"
    }
};