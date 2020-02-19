'use strict';

/**
 * Main JSX to String class.
 * @param {string} jsxString - xml string to parse.
 */
function JSX(jsxString) {
  return parseJsxString(jsxString);
}

function parseJsxString(jsxString) {
  var result = jsxString;
  if (jsxString.indexOf('>,<') > -1) {
    result = jsxString.replace(/>,</g, '><');
  }
  return result;
}

module.exports = JSX;
