describe('generateRandomString CLI', () => {

    // eslint:disable-next-line no-console
    jest.spyOn(console, 'log').mockImplementation();

    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });

    it('forgetting the command argument', () => {

        expect.assertions(1);

        // Set command argument.
        process.argv = ['', ''];

        // Run command.
        expect(() => require('./cli')).toThrow('A number must be given as the first command parameter.');
    });

    it.each([

        ['-5', 'Length must be a positive number.'],
        ['Not a Number', 'The first command parameter is not a number.'],

    ])('invalid command parameters', (input, error) => {

        expect.assertions(1);

        // Set command argument.
        process.argv = ['', '', input];

        // Run command.
        expect(() => require('./cli')).toThrow(error);
    });

    it.each([
        [['', '', '5']],
        [['', '', '5', undefined]],
        [['', '', '5', '']],
        [['', '', '5', 'Something else']],
        [['', '', '5', '123']],
    ])('correct calls', (input) => {

        expect.assertions(1);

        // Set command argument.
        process.argv = input as any;

        // Run command.
        require('./cli');
        // eslint-disable-next-line no-console
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
