/**
 *
 * styles.js
 *
 * Util functions for CSS in JS
 *
 */
import * as R from 'ramda';

const combineStyles = (...styles) => (theme) => R.compose(
  R.reduce(R.mergeDeepRight, {}),
  R.map(applyStyle => applyStyle(theme))
)(styles);

export {
  combineStyles,
};
