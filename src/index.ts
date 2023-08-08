import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');

/**
 * Computes and returns the factorial of `n`.
 * Returns `NaN` if `n` is negative, infinite, itself `NaN` or a float.
 *
 * @param n The number for which the factorial is to be calculated.
 * @returns `n!`
 */
function factorial(n: number) {
	assertTypeOf(n, 'number', 'n');
	let fact = 1;
	if (isNaN(n) || (n - Math.floor(n) !== 0) || n >= Infinity || n <= -Infinity)
		return NaN;
	if (n < 0) return NaN;
	else {
		for (let i = 1; i <= n; i++) {
			fact *= i;
		}
	}
	return fact;
}

factorial.factorial = factorial;

Object?.defineProperty?.(factorial, 'factorial', { enumerable: false });

export = factorial;
