/**
 * Computes and returns the factorial of `n`.
 * Returns `NaN` if `n` is negative, infinite, itself `NaN` or a float.
 *
 * @param n The number for which the factorial is to be calculated.
 * @returns `n!`
 */
declare function factorial(n: number): number;
declare namespace factorial {
    var factorial: typeof import(".");
}
export = factorial;
