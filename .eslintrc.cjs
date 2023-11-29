module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
        "prettier/react",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "imports"],
    rules: {
        "jsx-a11y/href-no-hash": ["off"],
        "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
        "max-len": [
            "warn",
            {
                code: 80,
                tabWidth: 4,
                comments: 80,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        "react/forbid-prop-types": "off",
        "react/prop-types": [2, { ignore: ["children"] }],
        "react/jsx-props-no-spreading": "off",
        "prettier/prettier": ["error"],
        "import/no-unresolved": "error",
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

                // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

                // use <root>/path/to/folder/tsconfig.json
                project: "path/to/folder",

                // Multiple tsconfigs (Useful for monorepos)

                // use a glob pattern
                project: "packages/*/tsconfig.json",

                // use an array
                project: ["packages/module-a/tsconfig.json", "packages/module-b/tsconfig.json"],

                // use an array of glob patterns
                project: ["packages/*/tsconfig.json", "other-packages/*/tsconfig.json"],
            },
        },
    },
};
