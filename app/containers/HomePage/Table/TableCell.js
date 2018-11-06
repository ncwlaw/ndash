import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { branch, renderComponent, compose, withProps } from 'recompose';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import red from '@material-ui/core/colors/red';
import lightGreen from '@material-ui/core/colors/lightGreen';

const styles = theme => ({
  cursor: {
    cursor: 'pointer',
  },
  cellContent: {
    paddingRight: 20,
  },
  pendingContent: {
    width: 40,
  },
  cellContentIcon: {
    fontSize: 20,
  },
  cancelIcon: {
    color: red['500'],
  },
  successIcon: {
    color: lightGreen['500'],
  },
});

const FailContent = withStyles(styles)(({ classes, children }) => (
  <Grid container alignItems="center">
    <Grid
      item
      className={classes.cellContent}
    >
      <CancelIcon
        className={cn(
          classes.cellContentIcon,
          classes.cancelIcon,
        )}
      />
    </Grid>
    <Grid item >
      {children}
    </Grid>
  </Grid>
));

const SuccessContent = withStyles(styles)(({ classes, children }) => (
  <Grid container alignItems="center">
    <Grid
      item
      className={classes.cellContent}
    >
      <CheckCircleIcon
        className={cn(
          classes.cellContentIcon,
          classes.successIcon,
        )}
      />
    </Grid>
    <Grid item >
      {children}
    </Grid>
  </Grid>
));

const PendingContent = withStyles(styles)(({ classes, children }) => (
  <Grid container alignItems="center">
    <div className={classes.pendingContent} />
    <Grid item >
      {children}
    </Grid>
  </Grid>
));

const CellContent = compose(
  branch(
    ({ status }) => status === "success",
    renderComponent(SuccessContent)
  ),
  branch(
    ({ status }) => status === "fail",
    renderComponent(FailContent)
  )
)(PendingContent)

function TableCellContent(props) {
  const {
    onClick,
    classes,
    children,
    status,
  } = props;

  return (
    <TableCell
      onClick={onClick}
      className={classes.cursor}
    >
      <CellContent status={status}>
        {children}
      </CellContent>
    </TableCell>
  )
}

export default withStyles(styles)(TableCellContent);
