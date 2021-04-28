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
 * Converts timestamp to milliseconds.
 *
 * @param {string} timestamp The unix timestamp we are converting into milliseconds.
 */
function toMilliseconds(timestamp) {

  // Detect if timestamp is already milliseconds to save time.
  if (timestamp.toString().length === 13) {
    return timestamp;
  }

  let millseconds;
  timestamp = parseInt(timestamp);
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

  return parseInt(milliseconds);

};

/**
 * Converts timestamp to microseconds.
 *
 * @param {string|number} timestamp The unix timestamp we are converting into microseconds.
 */
function toMicroseconds(timestamp) {

  // Detect if timestamp is already milliseconds to save time.
  if (timestamp.toString().length === 16) {
    return timestamp;
  }

  let microseconds;
  timestamp = parseInt(timestamp);
  let unit = detectUnit(timestamp);

  switch (unit) {
    case 'seconds':
      milliseconds = timestamp * 1000000;
      break;
    case 'milliseconds':
      milliseconds = timestamp * 1000;
      break;
    case 'nanoseconds':
      milliseconds = (timestamp / 1000).toFixed(0);
      break;
  }

  return parseInt(microseconds);

};

/**
 * Convert unix timestamp to nanoseconds.
 *
 * @param {string|number} timestamp The unix timestamp we are converting into nanoseconds.
 */
function toNanoseconds(timestamp) {

  // Detect if timestamp is already nanoseconds to save time.
  if (timestamp.toString().length === 19) {
    return timestamp;
  }

  var nanoseconds;
  timestamp = parseInt(timestamp);
  var unit = detectUnit(timestamp);

  switch (unit) {
    case 'seconds':
      nanoseconds = timestamp * 1000000000;
      break;
    case 'milliseconds':
      nanoseconds = timestamp * 1000000;
      break;
    case 'microseconds':
      nanoseconds = timestamp * 1000;
      break;
  }

  return parseInt(nanoseconds);

};

/**
 * Convert unix timestamp to seconds.
 *
 * @param {string|number} timestamp The unix timestamp we are converting into seconds.
 * @return {number}
 */
function toSeconds(timestamp) {

  // Detect if timestamp is already nanoseconds to save time.
  if (timestamp.toString().length === 10) {
    return timestamp;
  }

  var seconds = null;
  timestamp = parseInt(timestamp);
  var unit = detectUnit(timestamp);

  switch (unit) {
    case 'milliseconds':
      seconds = (timestamp / 1000).toFixed(0);
      break;
    case 'microseconds':
      seconds = (timestamp / 1000000).toFixed(0);
      break;
    case 'nanoseconds':
      seconds = (timestamp / 1000000000).toFixed(0);
      break;
  }

  return parseInt(seconds);

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
