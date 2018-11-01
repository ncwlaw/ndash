import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import common from '@material-ui/core/colors/common';

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "20px 0",
    height: "250px",
  },
  typography: {
    color: common['white'],
  },
});

class TableCard extends React.Component {
  render() {
    const { classes, title, value, color } = this.props;

    return (
      <Card
        className={cn(classes.root)}
        style={{
          color: "#fff",
          backgroundColor: color,
        }}
      >
        <Typography className={classes.typography} variant="h3">
          { value }
        </Typography>
        <Typography className={classes.typography} variant="subtitle2">
          { title }
        </Typography>
      </Card>
    );
  }
}

TableCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableCard);
