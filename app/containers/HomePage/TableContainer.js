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
import * as R from 'ramda';
import { Query } from 'react-apollo';
import { nest } from 'recompose';
import { injectIntl } from 'react-intl';
import messages from './messages';

import { CardWrapper, TableCard as TCard } from './Card';
const TableCard = nest(CardWrapper, TCard);

import { formatReportCount, translateEnvironment } from './utils';
import { GET_SUBSYSTEM_REPORTS, BUILD_ACTIONS } from './constants';

const formatPass = formatReportCount('pass');
const formatFail = formatReportCount('fail');
const format = R.compose(
    R.map(({ environment, fail, pass }) => ({ name: environment, pass, fail })),
    formatPass,
    formatFail,
);

const TableContainer = ({ intl, project, subsystem, data }) => (
    <Query
        query={GET_SUBSYSTEM_REPORTS}
        variables={{
            projectName: project,
            subsystemName: subsystem,
            actionName: BUILD_ACTIONS.CERTIFY,
        }}
    >
        {({ loading, error, data: { subsystemReport } }) => {
            if (loading) return 'loading...';
            const translate = translateEnvironment(value =>
                intl.formatMessage(messages[value]),
            );
            const reports = translate(subsystemReport.reports);
            return (
                <TableCard
                    source={data}
                    report={format(reports)}
                    title={subsystem}
                />
            );
        }}
    </Query>
);

export default injectIntl(TableContainer);
