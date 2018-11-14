import * as R from 'ramda';

const getEnvironment = R.compose(
    R.last,
    R.split('_'),
);

const formatReportCount = R.curry((propName, source) =>
    R.map(
        R.compose(
            R.over(
                R.lensProp(propName),
                R.compose(
                    R.reduce(R.add, 0),
                    R.map(R.prop('count')),
                ),
            ),
        ),
    )(source),
);

const formatReportEnvironment = R.curry((propName, fieldName, source) =>
    R.compose(
        R.map(({ environment, ...rest }) => ({
            name: environment,
            [fieldName]: rest[propName],
        })),
        formatReportCount,
    )(source),
);

const formatReport = R.curry((propName, source) =>
    R.compose(
        R.map(([id, environments]) => ({ id, ...environments })),
        R.toPairs,
        R.reduce(
            (acc, { id, environment, count }) =>
                R.assocPath([id, environment], count, acc),
            {},
        ),
        R.reduce(R.concat, []),
        R.map(({ environment, ...rest }) =>
            R.map(R.assoc('environment', environment))(rest[propName]),
        ),
    )(source),
);

const translateEnvironment = translate =>
    R.map(R.over(R.lensProp('environment'), translate));

export {
    getEnvironment,
    formatReport,
    formatReportCount,
    formatReportEnvironment,
    translateEnvironment,
};
