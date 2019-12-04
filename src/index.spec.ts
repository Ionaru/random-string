import { generateRandomString } from './index';

describe('generateRandomString', () => {
    test.each([
        0, 1, 10, 100, 1000, 1000,
    ])('Generate with length: %p', (length) => {
        const result = generateRandomString(length);
        expect(result.length).toEqual(length);
    });

    test.each([
        [5.5, 'Length must be an integer.'],
        [-5, 'Length must be a positive number.'],
    ])('Error with input: %p', (length, error) => {

        expect(() => generateRandomString(length as number)).toThrow(error as string);
    });

    test('Generate only A', () => {
        const result = generateRandomString(10, 'A');
        expect(result).toEqual('AAAAAAAAAA');
    });

    test('Generate only AA', () => {
        const result = generateRandomString(10, 'AA');
        expect(result).toEqual('AAAAAAAAAA');
    });

    test('Generate only 8', () => {
        const result = generateRandomString(10, '8');
        expect(result).toEqual('8888888888');
    });
});
