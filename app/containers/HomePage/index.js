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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Autocomplete from './Autocomplete';
import { compose, nest, withProps, withStateHandlers } from 'recompose';
import * as R from 'ramda';
import { Query } from 'react-apollo';
import { getEnvironment } from './utils';

import {
  CardWrapper,
  MetricCard,
  TableCard as TCard,
} from './Card';
const TableCard = nest(CardWrapper, TCard);

import { GET_SUBSYSTEMS, GET_BUILDS } from './constants';

const HomePage = props => {
  const {
    suggestions,
    source,
    filters,
    onFilterChange,
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
      <Grid
        container
        justify="space-between"
        spacing={24}
      >
        <Grid item xs={12} md={4}>
          <MetricCard
            color={lightGreen[500]}
            title={<FormattedMessage {...messages.successCard} />}
            value={1000}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MetricCard
            color={red[500]}
            title={"Failed"}
            title={<FormattedMessage {...messages.failCard} />}
            value={1000}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MetricCard
            color={blue[500]}
            title={<FormattedMessage {...messages.totalCard} />}
            value={2000}
          />
        </Grid>
      </Grid>
      {Object.entries(source).map(([title, data]) =>
        <TableCard
          source={data}
          key={title}
          title={title}
        />
      )}
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
      onFilterChange: () => (filters) => ({
        filters
      }),
    }
  ),
  withProps(({ filters, subsystems, builds }) => ({
    suggestions: R.map(({ subsystem: value }) => ({ value, label: value }))(subsystems),
    source: R.reduce((acc, value) => {
      const { subsystem, component, env } = value;
      const environment = getEnvironment(env);
      return R.assocPath([subsystem, component, environment], value, acc);
    }, {})(builds)
  }))
);

const EnhancedHomePage = enhance(HomePage);

const DataProvider = () => (
  <Query query={GET_SUBSYSTEMS}>
    {({ loading: loadingOne, error: errorOne, data: { subsystems } }) => (
      <Query query={GET_BUILDS}>
        {({ loading: loadingTwo, error: errorTwo, data: { builds } }) => {
          if (loadingOne || loadingTwo) return "loading...";
          if (errorOne || errorTwo) return "Error!";

          return (
            <EnhancedHomePage
              builds={builds}
              subsystems={subsystems}
            />
          )
        }}
      </Query>
    )}
  </Query>
)

export default DataProvider;
