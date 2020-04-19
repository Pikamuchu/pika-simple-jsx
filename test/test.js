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

    it('JSX object to String', function() {
      assert.equal(JSX.toStr(undefined), 'undefined');
      assert.equal(JSX.toStr(null), 'null');
      assert.equal(JSX.toStr(0), '0');
      assert.equal(JSX.toStr(1.1), '1.1');
      assert.equal(JSX.toStr(true), 'true');
      assert.equal(JSX.toStr(false), 'false');
      assert.equal(JSX.toStr('true'), 'true');
      assert.equal(JSX.toStr('false'), 'false');
      assert.equal(JSX.toStr(function () {}), 'function () {}');
      var date = new Date('1/1/2020');
      assert.equal(JSX.toStr(date), date.toString());
      assert.equal(JSX.toStr({}), '{}');
      assert.equal(JSX.toStr({foo: 'foo'}), '{&quot;foo&quot;:&quot;foo&quot;}');
      assert.equal(JSX.toStr([1,2,3]), '1,2,3');
      assert.equal(JSX.toStr(['foo','var']), 'foo,var');
      assert.equal(JSX.toStr([1,2,{}]), '[1,2,{}]');
      assert.equal(JSX.toStr(['foo',{var: 'var'}]), '[&quot;foo&quot;,{&quot;var&quot;:&quot;var&quot;}]');
    });
  });
});
