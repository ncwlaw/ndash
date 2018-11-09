import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { branch, renderComponent, compose, withProps } from 'recompose';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as R from 'ramda';
import TableCellData from './TableCell';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tableHeader: {
    marginLeft: 40,
  },
});

const rowString = R.compose(
  R.join('_'),
  R.values
);

function SimpleTable(props) {
  const {
    classes,
    source,
    headers,
    onClick,
  } = props;

  const [start, ...environments] = headers;

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell key={index}>
              <div className={classes.tableHeader}>
                {header}
              </div>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(source).map(([component, row], rowIndex) => (
          <TableRow hover key={rowString(row)}>
            <TableCell>
              <div className={classes.tableHeader}>
                {component}
              </div>
            </TableCell>
            {environments.map((environment, colIndex) => (
              <TableCellData
                key={`${rowIndex}_${colIndex}`}
                onClick={() => onClick(row[environment])}
                status={row[environment].status}
              >
                {row[environment].version}
              </TableCellData>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  source: PropTypes.object.isRequired,
};

SimpleTable.defaultProps = {
  source: {},
};

const enhance = compose(
  withProps(({ source }) => ({
    headers: R.compose(
      R.prepend('Component'),
      R.uniq,
      R.reduce(R.concat, []),
      R.map(R.compose(
        R.keys,
        R.last,
      )),
      R.toPairs
    )(source)
  })),
  withStyles(styles),
);

export default enhance(SimpleTable);
