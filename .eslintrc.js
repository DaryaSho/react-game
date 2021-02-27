module.exports = {
  "env": {
    "browser": true,
    "es2021" : true,
  },
  "extends": [
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {"jsx": true, },
    "ecmaVersion" : 12,
    "sourceType"  : "module",
  },
  "plugins": [
    "react",
  ],

  "rules": {
    "quotes"                 : ["error", "double"],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
    "for-direction"          : "error",
    "no-empty"               : ["error", { "allowEmptyCatch": true }],
    "no-dupe-keys"           : "error",
    "no-func-assign"         : "error",
    "no-sparse-arrays"       : "error",
    "eqeqeq"                 : ["error", "always"],
    "no-multi-spaces"        : ["error", { "ignoreEOLComments": true }],
    "semi-spacing"           : "error",
    "key-spacing"            : ["error", { "align": "colon" }],
    "comma-spacing"          : ["error", { "before": false, "after": true }],
    "object-curly-newline"   : ["error", { "multiline": true }],
    "space-infix-ops"        : "error"
  },
  "reportUnusedDisableDirectives": true
};
