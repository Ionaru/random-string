import { generateRandomString } from './index';

describe('generateRandomString', () => {
    it.each([
        0, 1, 10, 100, 1000, 1000,
    ])('Generate with length: %p', (length) => {
        expect.assertions(1);
        const result = generateRandomString(length);
        expect(result).toHaveLength(length);
    });

    it.each([
        [5.5, 'Length must be an integer.'],
        [-5, 'Length must be a positive number.'],
    ])('Error with input: %p', (length, error) => {
        expect.assertions(1);
        expect(() => generateRandomString(length as number)).toThrow(error as string);
    });

    it('Generate only A', () => {
        expect.assertions(1);
        const result = generateRandomString(10, 'A');
        expect(result).toBe('AAAAAAAAAA');
    });

    it('Generate only AA', () => {
        expect.assertions(1);
        const result = generateRandomString(10, 'AA');
        expect(result).toBe('AAAAAAAAAA');
    });

    it('Generate only 8', () => {
        expect.assertions(1);
        const result = generateRandomString(10, '8');
        expect(result).toBe('8888888888');
    });
});
