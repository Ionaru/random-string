# @ionaru/random-string

[![npm version](https://img.shields.io/npm/v/@ionaru/random-string.svg?style=for-the-badge)](https://www.npmjs.com/package/@ionaru/random-string)
[![npm version](https://img.shields.io/npm/v/@ionaru/random-string/next.svg?style=for-the-badge)](https://www.npmjs.com/package/@ionaru/random-string/v/next)
[![Build Status](https://img.shields.io/travis/Ionaru/random-string/master.svg?style=for-the-badge)](https://travis-ci.org/Ionaru/random-string)
[![codecov](https://img.shields.io/codecov/c/github/Ionaru/random-string/master.svg?style=for-the-badge)](https://codecov.io/gh/Ionaru/random-string)

## Description
Generate a random string from a range of 62 characters (A-Z, a-z, 0-9), or a custom character set.

## Usage
### CLI
```
npx @ionaru/random-string <input> [character set]
```

### API
```
npm install @ionaru/random-string
```
```js
import { generateRandomString } from '@ionaru/random-string';
const result = generateRandomString(input);
```
```js
import { generateRandomString } from '@ionaru/random-string';
const result = generateRandomString(input, '0123456789');
```
