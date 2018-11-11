import * as R from 'ramda';

const getEnvironment = R.compose(
    R.last,
    R.split('_'),
);

export { getEnvironment };
