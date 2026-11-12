#How typescript works?
When the TypeScript compiler runs (tsc), it acts as both a static type checker and a transpiler. Under the hood, TypeScript code is never actually executed by a browser or Node.js in its .ts form; instead, it is converted into pure JavaScript file.

## What Happens Under the Hood During Compilation (tsc)?

The compilation pipeline goes through four major phases:

## Parsing (Scanner & Parser):

The compiler reads your .ts source files, breaks them down into tokens, and builds an Abstract Syntax Tree (AST)—a hierarchical tree structure representing the grammar of your code.

## Type Checking (The Binder & Type Checker):

The checker maps symbols from the AST and validates your types against TypeScript's rules.

Crucial note: This is entirely a compile-time check. All TypeScript-specific syntax (types, interfaces, type aliases, enums) is evaluated here to catch bugs before your code runs.

## Transformation (Emitting):

Once type checking passes successfully (or even if it fails, depending on your configuration), the compiler strips away all the type annotations.

It transforms modern syntax down to whatever older JavaScript target version you specified (e.g., converting ES6 classes or arrow functions to ES5 if required).

## Code Emission:

Finally, tsc writes out the resulting JavaScript files (.js), along with optional declaration files (.d.ts) and source maps (.js.map) for debugging.



#### The Role of tsconfig.json

The tsconfig.json file serves two main purposes: marking the root of a TypeScript project and configuring the compiler (tsc).

Without a tsconfig.json, running tsc with a single file compiles it with default settings. When a project has a config file, it dictates how the entire project behaves:

File Management (include / exclude / files): Tells the compiler which files to process and which folders (like node_modules or dist) to ignore.

Target & Environment (target / lib): Specifies the JavaScript version the output should target (e.g., ES2022) and which built-in APIs are available in the environment (e.g., DOM types, Fetch API).

Type-Checking Strictness (strict): Enables a suite of type-checking behaviors (strictNullChecks, noImplicitAny, etc.) that enforce high code quality and safety.

Module Resolution (module / moduleResolution): Determines how imports and exports are handled (e.g., CommonJS for Node vs. ES Modules for modern bundlers).