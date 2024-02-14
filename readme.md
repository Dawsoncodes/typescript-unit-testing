# TypeScript unit testing with Jest

This repository contains the code for the blog post [TypeScript unit testing](https://lambdatest.com/blog/typescript-unit-testing/).

The [src/](/src/) directory contains the TypeScript code for the functions that we want to test. And the [tests/](/tests/) directory contains the tests for the functions.

## Installing dependencies

To install the dependencies, run the following command:

```bash
pnpm install
```

## Running the tests

To run the tests, run the following command:

```bash
pnpm test
```

## CI/CD

The project contains a workflow file for GitHub Actions at [.github/workflows/unit-tests.yaml](/.github/workflows/unit-tests.yaml). The workflow runs the tests on every push or pull request to the main branch.
