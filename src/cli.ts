#!/usr/bin/env node

import { generateRandomString } from './index';

const lengthArg = process.argv[2] as string | undefined;

if (!lengthArg) {
    throw new Error('A number must be given as the first command parameter.');
}

const length = Number(lengthArg);

if (Number.isNaN(length)) {
    throw new Error('The first command parameter is not a number.');
}

const characterArg = process.argv[3] as string | undefined;

const result = generateRandomString(length, characterArg);

// tslint:disable-next-line:no-console
console.log(result);
