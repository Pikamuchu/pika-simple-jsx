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

JSX.toStr = function(obj) {
  switch (obj && typeof obj) {
    case 'object':
      var str = obj.toString && obj.toString();
      return str && str.indexOf('[object Object]') > -1 ? escapeJSON(JSON.stringify(obj)) : str;
    default:
      return '' + obj;
  }
};

function escapeJSON(str) {
  return (
    str &&
    str.replace(/[&<>"']/g, function(m) {
      switch (m) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case "'":
          return '&#039;';
        default:
          return value;
      }
    })
  );
}

module.exports = JSX;
