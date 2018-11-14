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
import Autocomplete from './Autocomplete';
import { compose, withProps, withStateHandlers } from 'recompose';
import * as R from 'ramda';
import { Query } from 'react-apollo';
import Metrics from './Metrics';
import TableContainer from './TableContainer';

import { GET_SUBSYSTEMS, GET_BUILDS } from './constants';

const HomePage = props => {
    const {
        suggestions,
        source,
        filters,
        onFilterChange,
        project,
        intl,
    } = props;

    return (
        <Fragment>
            <Autocomplete
                isMulti
                value={filters}
                onChange={onFilterChange}
                label={intl.formatMessage(messages.searchLabel)}
                source={suggestions}
                emptyMessage={intl.formatMessage(messages.emptyMessage)}
            />
            <Metrics project={project} />
            {Object.entries(source).map(([subsystem, data]) => (
                <TableContainer
                    key={subsystem}
                    data={data}
                    subsystem={subsystem}
                    project={project}
                />
            ))}
        </Fragment>
    );
};

const enhance = compose(
    injectIntl,
    withStateHandlers(
        ({ initialFilter = [] }) => ({
            filters: initialFilter,
        }),
        {
            onFilterChange: () => filters => ({
                filters,
            }),
        },
    ),
    withProps(({ subsystems, builds, intl }) => ({
        suggestions: R.compose(
            R.map(({ subsystem: value }) => ({ value, label: value })),
            R.map(({ subsystem, ...rest }) => ({
                ...rest,
                subsystem: intl.formatMessage(messages[subsystem]),
            })),
        )(subsystems),
        source: R.reduce((acc, oldValue) => {
            let { subsystem: sub, component: com, environment: env } = oldValue;
            const subsystem = intl.formatMessage(messages[sub]);
            const component = intl.formatMessage(messages[com]);
            const environment = intl.formatMessage(messages[env]);
            const value = {
                ...oldValue,
                environment,
                subsystem,
                component,
            };
            return R.assocPath([subsystem, component, environment], value, acc);
        }, {})(builds),
    })),
);

const EnhancedHomePage = enhance(HomePage);

const DataProvider = () => (
    <Query query={GET_SUBSYSTEMS}>
        {({ loading: loadingOne, error: errorOne, data: { subsystems } }) => (
            <Query query={GET_BUILDS} variables={{ projectName: 'ngcc' }}>
                {({
                    loading: loadingTwo,
                    error: errorTwo,
                    data: { builds },
                }) => {
                    if (loadingOne || loadingTwo) return 'loading...';
                    if (errorOne || errorTwo) return 'Error!';

                    return (
                        <EnhancedHomePage
                            builds={builds}
                            subsystems={subsystems}
                            project="ngcc"
                        />
                    );
                }}
            </Query>
        )}
    </Query>
);

export default DataProvider;
