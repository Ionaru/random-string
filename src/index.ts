/**
 * Generate a random string from a range of 62 characters.
 * @param {number} length - The length of the desired string.
 * @param {string} characters - The characters to select from.
 * @return {string} - The randomly generated string.
 */
export const generateRandomString = (length: number, characters?: string): string => {

    if (length < 0) {
        throw new Error('Length must be a positive number.');
    }

    if (!Number.isInteger(length)) {
        throw new Error(`Length must be an integer.`);
    }

    const possibleCharacters = characters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let output = '';
    for (let i = 0; i < length; i++) {
        output += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    }
    return output;
};
