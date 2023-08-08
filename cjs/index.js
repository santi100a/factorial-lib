"use strict";
var _a;
var assertTypeOf = require("@santi100/assertion-lib/cjs/type-of");
/**
 * Computes and returns the factorial of `n`.
 * Returns `NaN` if `n` is negative, infinite, itself `NaN` or a float.
 *
 * @param n The number for which the factorial is to be calculated.
 * @returns `n!`
 */
function factorial(n) {
    assertTypeOf(n, 'number', 'n');
    var fact = 1;
    if (isNaN(n) || !(n - Math.floor(n) === 0) || n >= Infinity || n <= -Infinity)
        return NaN;
    if (n < 0)
        return NaN;
    else {
        for (var i = 1; i <= n; i++) {
            fact *= i;
        }
    }
    return fact;
}
factorial.factorial = factorial;
(_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, factorial, 'factorial', { enumerable: false });
module.exports = factorial;
