describe('factorial function test suites', () => {
	const factorial = require('..');
	test("it's a valid function", () => {
		expect(factorial).toBeInstanceOf(Function);
	});
	test('it can compute the right factorial', () => {
		expect(factorial(7)).toBe(5_040);
		expect(factorial(6)).toBe(720);
		expect(factorial(5)).toBe(120);
		expect(factorial(4)).toBe(24);
		expect(factorial(3)).toBe(6);
		expect(factorial(2)).toBe(2);
		expect(factorial(1)).toBe(1);
	});
	test('it can handle invalid numbers correctly', () => {
		expect(factorial(-5)).toBe(NaN);
		expect(factorial(NaN)).toBe(NaN);
		expect(factorial(35.7)).toBe(NaN);
		expect(factorial(-Infinity)).toBe(NaN);
		expect(factorial(Infinity)).toBe(NaN);
	});
	describe('error handling', () => {
		test('it throws an error in case "n" isn\'t a number', () => {
            expect(() => factorial('not a number')).toThrow(TypeError);
            expect(() => factorial(false)).toThrow(TypeError);
            expect(() => factorial(null)).toThrow(TypeError);
            expect(() => factorial()).toThrow(TypeError);
            expect(() => factorial(undefined)).toThrow(TypeError);
            expect(() => factorial([])).toThrow(TypeError);
            expect(() => factorial({})).toThrow(TypeError);
        });
	});
});
