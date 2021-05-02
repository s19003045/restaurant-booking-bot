module.exports = {
  parserOptions: {
    ecmaVersion: 6,
  },
  extends: ["eslint:recommended", "prettier"],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
      },
    ],
  },
  plugins: ["prettier"],
  overrides: [
    {
      files: ["**/*.test.js"],
      env: {
        jest: true,
      },
    },
  ],
};
