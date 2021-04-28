/*!
 * unix-unit-converter
 * Copyright(c) 2021 Jake Mayfield (https://github.com/jakemayfield/)
 * MIT Licensed
 */

'use strict'

/**
 * Module exports.
 * @public
 */
module.exports = toMicroseconds;
module.exports = toMilliseconds;
module.exports = toNanoseconds;
module.exports = toSeconds;

/**
 * Format timeframe string in our "standard".
 *
 * @param {string} timestamp The timeframe we are converting the string for.
 */
function toMilliseconds(timestamp) {

  // Detect if timestamp is already milliseconds to save time.
  if (timestamp.toString().length === 13) {
    return timestamp;
  }

  let millseconds;
  let unit = detectUnit(timestamp);

  switch (unit) {
    case 'seconds':
      milliseconds = timestamp * 1000;
      break;
    case 'microseconds':
      milliseconds = (timestamp / 1000).toFixed(0);
      break;
    case 'nanoseconds':
      milliseconds = (timestamp / 1000000).toFixed(0);
      break;
  }

  return milliseconds;

};

/**
 * Format timeframe string in our "standard".
 *
 * @param {string} timestamp The timeframe we are converting the string for.
 */
function toMicroseconds(timestamp) {

  // Detect if timestamp is already milliseconds to save time.
  if (timestamp.toString().length === 16) {
    return timestamp;
  }

  let millseconds;
  let unit = detectUnit(timestamp);

  switch (unit) {
    case 'seconds':
      milliseconds = timestamp * 1000;
      break;
    case 'microseconds':
      milliseconds = (timestamp / 1000).toFixed(0);
      break;
    case 'nanoseconds':
      milliseconds = (timestamp * 1000000).toFixed(0);
      break;
  }

  return milliseconds;

};

/**
 * Convert unix timestamp to nanoseconds.
 *
 * @param {string} timestamp The timeframe we are converting the string for.
 */
function toNanoseconds(timestamp) {

  // Detect if timestamp is already nanoseconds to save time.
  if (timestamp.toString().length === 19) {
    return timestamp;
  }

  var nanoseconds;
  var unit = detectUnit(timestamp);

  switch (unit) {
    case 'seconds':
      nanoseconds = timestamp * 1000000000;
      break;
    case 'milliseconds':
      nanoseconds = (timestamp * 1000000).toFixed(0);
      break;
    case 'microseconds':
      nanoseconds = (timestamp * 1000).toFixed(0);
      break;
  }

  return nanoseconds;

};

/**
 * Convert unix timestamp to seconds.
 *
 * @param {mixed} timestamp The number|string The timeframe we are converting the string for.
 * @return {number}
 */
function toSeconds(timestamp) {

  // Detect if timestamp is already nanoseconds to save time.
  if (timestamp.toString().length === 10) {
    return timestamp;
  }

  return null;

  // var seconds = null;
  // var unit = detectUnit(timestamp);
  //
  // switch (unit) {
  //   case 'milliseconds':
  //     seconds = (timestamp * 1000000).toFixed(0);
  //     break;
  //   case 'microseconds':
  //     seconds = (timestamp * 1000).toFixed(0);
  //     break;
  //   case 'nanoseconds':
  //     seconds = timestamp * 1000000000;
  //     break;
  // }
  //
  // return parseInt(seconds);

};

// Detects if the unix timestamp is seconds, milliseconds, microseconds and nanoseconds.
function detectUnit(timestamp) {
  var length = timestamp.toString().length;
  switch (length) {
    case 10:
      return 'seconds';
      break;
    case 13:
      return 'milliseconds';
      break;
    case 16:
      return 'microseconds';
      break;
    case 19:
      return 'nanoseconds';
      break;
  }
  return;
}
