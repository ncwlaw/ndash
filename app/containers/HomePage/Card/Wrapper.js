import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const styles = theme => ({
    root: {
        margin: '30px 0',
    },
});

const CardWrapper = ({ classes, children }) => (
    <div className={classes.root}>{children}</div>
);

export default withStyles(styles)(CardWrapper);
