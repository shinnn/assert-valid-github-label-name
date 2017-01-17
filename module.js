/*!
 * assert-valid-github-label-name | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/assert-valid-github-label-name
*/
import appendType from 'append-type';
import validateGithubIssueLabelName from 'validate-github-label-name';

var ERROR_MESSAGE = 'Expected a valid Github issue label name';

export default function assertValidGithubLabelName(str) {
  if (typeof str !== 'string') {
    throw new TypeError(ERROR_MESSAGE + ' (string), but got ' + appendType(str) + '.');
  }

  if (str.length === 0) {
    throw new Error(ERROR_MESSAGE + ', but got \'\' (empty string).');
  }

  var validationResult = validateGithubIssueLabelName(str);

  if (validationResult.valid) {
    return;
  }

  throw new Error(
    ERROR_MESSAGE +
    ', but got an invalid' +
    validationResult.formatted.replace('Invalid issue label', '')
  );
}
