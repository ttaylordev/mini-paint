module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-spacing": [
            "error",
            "never"
        ],
    "array-callback-return": "error",
    "arrow-body-style": [
            "error",
            "always"
        ],
    "arrow-parens": [
            "error",
            "as-needed"
        ],
    "arrow-spacing": [
            "error",
      {
        "after": true,
        "before": true
            }
        ],
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": [
            "error",
            "1tbs"
        ],
    "callback-return": "error",
    "camelcase": "error",
    "comma-spacing": [
            "error",
      {
        "after": true,
        "before": false
            }
        ],
    "comma-style": [
            "error",
            "last"
        ],
    "complexity": "error",
    "computed-property-spacing": [
            "error",
            "never"
        ],
    "consistent-return": "error",
    "consistent-this": "error",
    "curly": "error",
    "default-case": "error",
    "dot-location": "error",
    "dot-notation": "error",
    "eol-last": "off",
    "eqeqeq": "error",
    "func-names": "off",
    "func-style": [
            "error",
            "declaration",
      {
        "allowArrowFunctions": true
            }
        ],
    "generator-star-spacing": "error",
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-length": "off",
    "id-match": "error",
    "indent": "off",
    "init-declarations": "off",
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": [
            "error",
      {
        "after": true,
        "before": true
            }
        ],
    "linebreak-style": "off",
    "lines-around-comment": "error",
    "max-depth": "error",
    "max-len": "off",
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements": "off",
    "max-statements-per-line": "error",
    "new-cap": "error",
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "error",
    "no-alert": "off",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "error",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "off",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": [
            "error",
            "functions"
        ],
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-mixed-requires": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "off",
    "no-native-reassign": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
            "error",
      {
        "props": false
            }
        ],
    "no-path-concat": "error",
    "no-plusplus": "off",
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unsafe-finally": "error",
    "no-use-before-define": "off",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-var": "off",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-spacing": "error",
    "object-property-newline": "error",
    "object-shorthand": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "error",
    "operator-assignment": "error",
    "operator-linebreak": "error",
    "padded-blocks": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "off",
    "prefer-reflect": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "off",
    "quote-props": "off",
    "quotes": "off",
    "radix": "error",
    "require-jsdoc": "off",
    "require-yield": "error",
    "semi": "error",
    "semi-spacing": [
            "error",
      {
        "after": true,
        "before": false
            }
        ],
    "sort-imports": "error",
    "sort-vars": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": "off",
    "space-in-parens": [
            "error",
            "never"
        ],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "off",
    "strict": "error",
    "template-curly-spacing": "error",
    "unicode-bom": [
            "error",
            "never"
        ],
    "valid-jsdoc": "error",
    "vars-on-top": "off",
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
    "yoda": [
            "error",
            "never"
        ]
  }
};
