module.exports = {
  extends: [
    "next/core-web-vitals",
    "airbnb-base",
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQoute: true,
        endOfLine: "auto",
      }
    ],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint", "unused-imports", "simple-import-sort"],
      extends: [
        "next/core-web-vitals",
        "airbnb-base",
        "plugin:prettier/recommended"
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "prettier/prettier": [
          "error",
          {
            singleQoute: true,
            endOfLine: "auto",
          }
        ],
        "react/destructuring-assignment": "off",
        "js-a11y/anchor-is-valid": "off",
        "react/require-default-props": "off",
        "react.jsx-props-no-spreading": "off",
        "react-hooks/exhaustive-deps": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      },
    },
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      plugins: ["jest", "jest-formatting", "testing-library", "jest-dom"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-formatting/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
      ],
    },
  ],
}
