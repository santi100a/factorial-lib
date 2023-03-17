# Santi's Sorting Library
[![Build Status](actions/workflows/test.yml/badge.svg)](actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/factorial-lib)](https://npmjs.org/package/@santi100/factorial-lib)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/factorial-lib.svg)](https://github.com/santi100a/factorial-lib)
[![License](https://img.shields.io/github/license/santi100a/factorial-lib.svg)](https://github.com/santi100a/factorial-lib)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/factorial-lib)](https://bundlephobia.com/package/@santi100/factorial-lib@latest)

- 🚀 Lightweight and fast[^](#disclaimers)
- 👴 ES3-compliant[*](#disclaimers)
- 💻 Portable between the browser and Node.js

## What's this?
This is a small, lightweight library for computing the factorial of any positive finite integer.

## Installation
- Via NPM: `npm install @santi100/factorial-lib`
- Via Yarn: `yarn add @santi100/factorial-lib`
- Via PNPM: `pnpm install @santi100/factorial-lib`


## API

- `function factorial(n: number): number;` 
Returns -1 if $n$ is negative, or `NaN` if it's infinite, itself `NaN` or a float. 

It takes the number for which the factorial is to be calculated, and returns $n!$
## Usage
```typescript
import { factorial } from '@santi100/factorial-lib'; // ESM
const { factorial } = require('@santi100/factorial-lib'); // CJS

console.log(factorial(5)); // prints 120
console.log(factorial(7)); // prints 5,040

console.log(factorial(-60)); // prints -1
console.log(factorial(3.5)); // prints NaN
console.log(factorial(NaN)); // prints NaN
console.log(factorial(Infinity)); // prints NaN
console.log(factorial(-Infinity)); // prints NaN
```
## Contribute

Wanna contribute? [File an issue](issues) or [pull request](pulls)! 
Look at [the contribution instructions](CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](CODE_OF_CONDUCT.md).

## Disclaimers
**Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so.*

*^The source code is just a few kilobytes in size.*