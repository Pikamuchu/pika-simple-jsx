'use strict';

var sinon = require('sinon');
var assert = require('chai').assert;
var JSX = require('../lib');

describe('Simple JSX tests', function() {
  describe('JSX parse tests', function() {

    it('Parse simple jsx', function() {
      var jsxString =
        '<div class="grid">\n' +
        '  <header>header</header>\n' +
        '  <article>greeting1</article>,<article>greeting2</article>' +
        '  <footer>footer</footer>\n' +
        '</div>';
      var jsx = JSX(jsxString);
      assert.equal(jsx, '<div class="grid">\n' +
        '  <header>header</header>\n' +
        '  <article>greeting1</article><article>greeting2</article>' +
        '  <footer>footer</footer>\n' +
        '</div>');
    });
  });
});
