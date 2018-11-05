import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose, withProps } from 'recompose';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as R from 'ramda';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  cursor: {
    cursor: 'pointer',
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

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {headers.map((header, index) => <TableCell key={index}>{header}</TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {source.map((row, rowIndex) => {
          return (
            <TableRow hover key={rowString(row)}>
              {headers.map((header, colIndex) => (
                <TableCell
                  key={`${rowIndex}_${colIndex}`}
                  onClick={onClick}
                  className={classes.cursor}
                >
                  {row[header]}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  source: PropTypes.array.isRequired,
};

SimpleTable.defaultProps = {
  source: [],
};

const enhance = compose(
  withProps(({ source }) => ({
    headers: R.ifElse(
      R.either(R.isNil, R.isEmpty),
      R.always([]),
      R.compose(
        R.keys,
        R.head
      )
    )(source)
  })),
  withStyles(styles),
);

export default enhance(SimpleTable);
