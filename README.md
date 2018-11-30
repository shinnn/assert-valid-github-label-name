# assert-valid-github-label-name

[![npm version](https://img.shields.io/npm/v/assert-valid-github-label-name.svg)](https://www.npmjs.com/package/assert-valid-github-label-name)
[![Bower version](https://img.shields.io/bower/v/assert-valid-github-label-name.svg)](https://github.com/shinnn/assert-valid-github-label-name/releases)
[![Build Status](https://travis-ci.com/shinnn/assert-valid-github-label-name.svg?branch=master)](https://travis-ci.com/shinnn/assert-valid-github-label-name)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/assert-valid-github-label-name.svg)](https://coveralls.io/r/shinnn/assert-valid-github-label-name)

Assert a given string is a valid [Github issue label](https://help.github.com/articles/creating-a-label/) name

```javascript
import assertValidGithubLabelName from 'assert-valid-github-label-name';

assertValidGithubLabelName('label🍕name🍔\n');
```

```
/Users/shinnn/node_modules/assert-valid-github-label-name/index.js:27
  throw new Error(
  ^

Error: Expected a valid Github issue label name, but got an invalid name "label🍕name🍔\n":
at 5,10: Invalid characters: "🍕" and "🍔". Label name cannot have Unicode characters above 0xFFFF.
at 11: Label name cannot have linebreaks.
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install assert-valid-github-label-name
```

### [bower](https://bower.io/)

```
bower install assert-valid-github-label-name
```

## API

### assertValidGithubLabelName(*str*)

*str*: `string` (Github issue label name)  

It throws an error when the given string is not a valid Github issue label name.

```javascript
import assertValidGithubLabelName from 'assert-valid-github-label-name';

// doesn't throw
assertValidGithubLabelName('foo');
assertValidGithubLabelName('bar baz');

// throws an error
assertValidGithubLabelName('😄');
assertValidGithubLabelName('𠮷');
assertValidGithubLabelName('ab\ncd');
assertValidGithubLabelName(' ');
assertValidGithubLabelName('');
```

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
