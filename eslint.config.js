import { fileURLToPath } from "node:url";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import svelte from "eslint-plugin-svelte";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import ts from "typescript-eslint";

import svelteConfig from "./svelte.config.js";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default ts.config(
    includeIgnoreFile(gitignorePath),
    eslintPluginUnicorn.configs["recommended"],
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs.recommended,
    prettier,
    ...svelte.configs.prettier,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            "simple-import-sort": simpleImportSort
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "no-undef": "off",
            "unicorn/better-regex": "error",
            "unicorn/prevent-abbreviations": [
                "error",
                {
                    replacements: {
                        props: {
                            properties: false
                        }
                    }
                }
            ],
            "unicorn/filename-case": [
                "error",
                {
                    cases: {
                        pascalCase: true,
                        kebabCase: true
                    }
                }
            ]
        }
    },
    {
        files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                extraFileExtensions: [".svelte"],
                parser: ts.parser,
                svelteConfig
            }
        }
    }
);
