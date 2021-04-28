# `unix-unit-converter`
A simple npm package to quickly convert unix timestamps into other units of unix timestamps. Nothing special, really!

## Install
`npm install --save unix-unit-converter`

## How to use?
Require or import the conversion functions you want to use:
```
const { toSeconds, toMilliseconds, toMicroSeconds, toNanoseconds } = require('unix-unit-converter');

let timestamp = 1619630581; // In seconds.

// Convert a unix timestamp in seconds to milliseconds.
let timestampToMilli = toMilliseconds(timestamp);
console.log(timestampToMilli); // Result: 1619630581000

// Convert a unix timestamp in seconds to microseconds.
let timestampToMicro = toMicroseconds(timestamp);
console.log(timestampToMicro); // Result: 1619630581000000

// Convert a unix timestamp in seconds to nanoseconds.
let timestampToNano = toNanoseconds(timestamp);
console.log(timestampToNano); // Result: 1619630581000000000

// Convert a unix timestamp in nanoseconds to milliseconds.
let timestamp = 1619630581000000000
timestamp = toNanoseconds(timestamp);
console.log(timestamp); // Result: 1619630581000

```
