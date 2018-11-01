import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
  },
};

const Wrapper = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Wrapper);
