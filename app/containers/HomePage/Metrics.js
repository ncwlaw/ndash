/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this Component should technically be a stateless functional
 * Component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import lightGreen from '@material-ui/core/colors/lightGreen';
import * as R from 'ramda';
import { Query } from 'react-apollo';

import { MetricCard } from './Card';

import {
    translateEnvironment,
    formatReport,
    formatReportEnvironment,
} from './utils';
import { GET_PROJECT_WEEKLY_REPORTS, BUILD_ACTIONS } from './constants';

const Metrics = props => {
    const {
        source,
        pass,
        fail,
        total,
        weeklyPass,
        weeklyFail,
        weeklyTotal,
    } = props;

    return (
        <Grid container justify="space-between" spacing={24}>
            <Grid item xs={12} md={4}>
                <MetricCard
                    color={lightGreen[500]}
                    title={<FormattedMessage {...messages.successCard} />}
                    value={source.total_pass}
                    source={weeklyPass}
                    fieldName={'Pass'}
                    colorOffset={8}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <MetricCard
                    color={red[500]}
                    title={'Failed'}
                    title={<FormattedMessage {...messages.failCard} />}
                    value={source.total_fail}
                    source={weeklyFail}
                    fieldName={'Fail'}
                    colorOffset={0}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <MetricCard
                    color={blue[500]}
                    title={<FormattedMessage {...messages.totalCard} />}
                    value={source.total_pass_and_fail}
                    source={weeklyTotal}
                    fieldName={'Total'}
                    colorOffset={4}
                />
            </Grid>
        </Grid>
    );
};

const formatSource = R.curry((propName, fieldName, source) =>
    R.map(
        R.compose(
            ({ environment, ...rest }) => ({
                name: environment,
                [fieldName]: rest[propName],
            }),
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

const formatWeeklySource = R.curry((propName, source) =>
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

const DataProvider = ({ intl, project }) => (
    <Query
        query={GET_PROJECT_WEEKLY_REPORTS}
        variables={{ projectName: project, actionName: BUILD_ACTIONS.CERTIFY }}
    >
        {({ loading, error, data: { weeklyProjectReport: source } }) => {
            if (loading) return 'loading...';
            const translate = translateEnvironment(value =>
                intl.formatMessage(messages[value]),
            );
            const reports = translate(source.reports);
            const pass = formatReportEnvironment('pass', 'Pass', reports);
            const fail = formatReportEnvironment('fail', 'Fail', reports);
            const total = formatReportEnvironment('total', 'Total', reports);
            const weeklyPass = formatReport('pass', reports);
            const weeklyFail = formatReport('fail', reports);
            const weeklyTotal = formatReport('total', reports);

            return (
                <Metrics
                    pass={pass}
                    fail={fail}
                    total={total}
                    source={source}
                    weeklyPass={weeklyPass}
                    weeklyFail={weeklyFail}
                    weeklyTotal={weeklyTotal}
                />
            );
        }}
    </Query>
);

export default injectIntl(DataProvider);
