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
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Autocomplete from './Autocomplete';
import { compose, nest, withProps, withStateHandlers } from 'recompose';
import * as R from 'ramda';

import {
  CardWrapper,
  MetricCard,
  TableCard as TCard,
} from './Card';
const TableCard = nest(CardWrapper, TCard);

const enhance = compose(
  withProps({
    source: [
      [
        'COSMOS',
        [
          {
            'id': 0,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Kafka",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 1,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Parsec",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 2,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Ingress",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 3,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "DSS",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 4,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Test Framework",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
        ],
      ],
      [
        'Clara',
        [
          {
            'id': 0,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Kafka",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 1,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Parsec",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 2,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Ingress",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 3,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "DSS",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 4,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Test Framework",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
        ],
      ],
      [
        'CI Infrastructure',
        [
          {
            'id': 0,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Kafka",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 1,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Parsec",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 2,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Ingress",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 3,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "DSS",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 4,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Test Framework",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
        ],
      ],
      [
        'Maglev',
        [
          {
            'id': 0,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Kafka",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 1,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Parsec",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 2,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Ingress",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 3,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "DSS",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
          {
            'id': 4,
            'System': "NGCC",
            'Subsystem': "COSMOS",
            'Component': "Test Framework",
            'Pre-Merge': "1.0.10",
            'Post-Merge': "1.0.8",
            'Integration': "1.0.5",
            'Quality': "1.0.3",
            'Canary': undefined,
            'Production': undefined,
          },
        ],
      ],
    ],
  }),
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
  withProps(({ filters, source }) => ({
    suggestions: R.map(([value]) => ({ value, label: value }))(source),
    source: R.compose(
      R.map(R.over(R.lensIndex(1), R.map(R.omit(['id', 'System', 'Subsystem'])))),
      (source) => (R.isEmpty(filters)
        ? source
        : R.filter(([type]) => R.any(R.propEq('value', type))(filters))(source)
      )
    )(source),
  }))
);

const HomePage = props => {
  const {
    suggestions,
    source,
    filters,
    onFilterChange,
  } = props;

  return (
    <Fragment>
      <Autocomplete
        isMulti
        value={filters}
        onChange={onFilterChange}
        label="Search for Subsystem"
        source={suggestions}
      />
      <Grid
        container
        justify="space-between"
        spacing={24}
      >
        <Grid item xs={12} md={4}>
          <MetricCard
            color={lightGreen[500]}
            title="Passed"
            value={1000}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MetricCard
            color={red[500]}
            title={"Failed"}
            value={1000}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MetricCard
            color={blue[500]}
            title={"Total"}
            value={2000}
          />
        </Grid>
      </Grid>
      {source.map(([title, data]) =>
        <TableCard
          source={data}
          key={title}
          title={title}
        />
      )}
    </Fragment>
  );
};

export default enhance(HomePage);
