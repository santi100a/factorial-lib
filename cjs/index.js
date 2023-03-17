"use strict";
exports.__esModule = true;
exports.factorial = void 0;
function __checkErrors(n) {
    if (typeof n !== 'number')
        throw new TypeError("\"n\" must be a number. Got \"".concat(n, "\" of type \"").concat(typeof n, "\"."));
}
function __isInteger(num) {
    var _a;
    return (((_a = Number === null || Number === void 0 ? void 0 : Number.isInteger) === null || _a === void 0 ? void 0 : _a.call(Number, num)) ||
        (num < 0 ? Math.ceil(num) : Math.floor(num)) === num);
}
/**
 * Computes and returns the factorial of `n`.
 * Returns -1 if `n` is negative, or `NaN` if it's infinite, itself `NaN` or a float.
 *
 * @param n The number for which the factorial is to be calculated.
 * @returns `n!`
 */
function factorial(n) {
    __checkErrors(n);
    if (isNaN(n) || !__isInteger(n) || (n >= Infinity || n <= -Infinity))
        return NaN;
    var fact = 1;
    if (n < 0)
        return -1;
    else {
        for (var i = 1; i <= n; i++) {
            fact *= i;
        }
    }
    return fact;
}
exports.factorial = factorial;
