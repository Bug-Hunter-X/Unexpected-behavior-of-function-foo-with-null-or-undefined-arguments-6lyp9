# Unexpected behavior of function foo with null or undefined arguments

This repository demonstrates a subtle bug in a JavaScript function that handles null or undefined arguments unexpectedly. The function `foo` is intended to add two numbers; however, when either argument is null or undefined, it returns 0 instead of handling the situation more appropriately.

## Bug Description
The function `foo` returns 0 when either `a` or `b` is null or undefined. This behavior might be unexpected and could lead to incorrect calculations in applications using this function.  A more robust approach might be to return `NaN` to indicate an invalid operation or throw an error to signal the problem explicitly.

## Solution
The provided solution demonstrates how to improve the function's behavior by checking for null or undefined values and handling them appropriately, either by returning `NaN` or throwing an error.