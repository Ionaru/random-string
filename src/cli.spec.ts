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
        expect(() => require('./cli')).toThrow('A number must be given as command parameter.');
    });

    test.each([

        ['-5', 'Length must be a positive number.'],
        ['Not a Number', 'The given command parameter is not a number.'],

    ])('Invalid command parameters', (input, error) => {

        // Set command argument.
        process.argv = ['', '', input];

        // Run command.
        expect(() => require('./cli')).toThrow(error);
    });

    test('Calling the command correctly', () => {

        // Set command argument.
        process.argv = ['', '', '5'];

        // Run command.
        require('./cli');
        // tslint:disable-next-line:no-console
        expect(console.log).toHaveBeenCalledTimes(1);
    });

    test('Giving extra arguments', () => {

        // Set command argument.
        process.argv = ['', '', '5', 'Something else'];

        // Run command.
        require('./cli');
        // tslint:disable-next-line:no-console
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
