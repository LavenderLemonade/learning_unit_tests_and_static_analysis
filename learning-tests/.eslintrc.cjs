module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",

        "project": './tsconfig.json'
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
    }
}
