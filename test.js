'use strict';

const escapeStringRegexp = require('escape-string-regexp');
const main = require('.');
const test = require('tape');

const expected = `Expected a valid Github issue label name, but got an invalid name "🐄\\n":
at 0: Invalid character: "🐄". Label name cannot have Unicode characters above 0xFFFF.
at 1: Label name cannot have linebreaks.`;

test('assertValidGithubLabelName()', t => {
  t.strictEqual(main('abc'), undefined, 'should return no value.');

  t.throws(
    () => main('🐄\n'),
    new RegExp(`^Error.*${escapeStringRegexp(expected)}`),
    'should throw an error when it takes an invalid Github label name.'
  );

  t.throws(
    () => main(1),
    /^TypeError.*Expected a valid Github issue label name \(string\), but got 1 \(number\)\./,
    'should throw a type error when it takes a non-string value.'
  );

  t.throws(
    () => main(''),
    /^Error.*Expected a valid Github issue label name, but got '' \(empty string\)\./,
    'should throw an error when it takes an empty string.'
  );

  t.throws(
    () => main(),
    /^TypeError.*Expected a valid Github issue label name \(string\), but got undefined\./,
    'should throw an error when it takes no arguments.'
  );

  t.end();
});
