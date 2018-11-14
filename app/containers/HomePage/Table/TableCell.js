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
        paddingLeft: 20,
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
    textOverflow: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
});

const Content = ({ icon, classes, children }) => (
    <Grid container wrap="nowrap" alignItems="center">
        <Grid item className={classes.cellContent}>
            {icon}
        </Grid>
        <Grid item>{children}</Grid>
    </Grid>
);

const FailContent = withStyles(styles)(({ classes, children }) => (
    <Content
        classes={{ cellContent: classes.cellContent }}
        icon={
            <CancelIcon
                className={cn(classes.cellContentIcon, classes.cancelIcon)}
            />
        }
    >
        {children}
    </Content>
));

const SuccessContent = withStyles(styles)(({ classes, children }) => (
    <Content
        classes={{ cellContent: classes.cellContent }}
        icon={
            <CheckCircleIcon
                className={cn(classes.cellContentIcon, classes.successIcon)}
            />
        }
    >
        {children}
    </Content>
));

const PendingContent = withStyles(styles)(({ classes, children }) => (
    <Content classes={{ cellContent: classes.cellContent }}>
        <div className={classes.pendingContent}>{children}</div>
    </Content>
));

const CellContent = compose(
    branch(
        ({ status }) => status === 'SUCCESS',
        renderComponent(SuccessContent),
    ),
    branch(({ status }) => status === 'FAILURE', renderComponent(FailContent)),
)(PendingContent);

function TableCellContent(props) {
    const { onClick, classes, children, status } = props;

    return (
        <TableCell
            onClick={onClick}
            className={cn(classes.cursor, classes.textOverflow)}
        >
            <CellContent status={status}>{children}</CellContent>
        </TableCell>
    );
}

export default withStyles(styles)(TableCellContent);
