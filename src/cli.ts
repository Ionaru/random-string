#!/usr/bin/env node

import { generateRandomString } from './index';

const commandArg = process.argv[2] as unknown;

if (!commandArg) {
    throw new Error('A number must be given as command parameter.');
}

const input = Number(commandArg);

if (Number.isNaN(input)) {
    throw new Error('The given command parameter is not a number.');
}

const result = generateRandomString(input);

// tslint:disable-next-line:no-console
console.log(result);
