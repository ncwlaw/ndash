/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
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

import Table from './Table';
import { TableCard, MetricCard  } from './Card';

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
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
        <TableCard>
          <Table />
        </TableCard>
      </Fragment>
    );
  }
}
