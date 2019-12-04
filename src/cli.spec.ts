describe('Test generateRandomString CLI', () => {

    // tslint:disable-next-line:no-console
    console.log = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });

    test('Forgetting the command argument', () => {

        // Set command argument.
        process.argv = ['', ''];

        // Run command.
        expect(() => require('./cli')).toThrow('A number must be given as the first command parameter.');
    });

    test.each([

        ['-5', 'Length must be a positive number.'],
        ['Not a Number', 'The first command parameter is not a number.'],

    ])('Invalid command parameters', (input, error) => {

        // Set command argument.
        process.argv = ['', '', input];

        // Run command.
        expect(() => require('./cli')).toThrow(error);
    });

    test.each([
        [['', '', '5']],
        [['', '', '5', undefined]],
        [['', '', '5', '']],
        [['', '', '5', 'Something else']],
        [['', '', '5', '123']],
    ])('Correct calls', (input) => {

        // Set command argument.
        process.argv = input as any;

        // Run command.
        require('./cli');
        // tslint:disable-next-line:no-console
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
