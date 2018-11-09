import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import common from '@material-ui/core/colors/common';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    height: "250px",
    margin: "20px 0",
    color: "#fff",
    position: 'relative',
  },
  cardContent: {
    height: "100%",
  },
  infoIcon: {
    color: "#fff",
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
        style={{ backgroundColor: color, color: "#fff" }}
        className={classes.root}
      >
        <IconButton style={{ right: 0, position: 'absolute' }}>
          <MoreVertIcon className={classes.infoIcon} />
        </IconButton>
        <Grid
          justify="center"
          direction="column"
          alignItems="center"
          container
          className={classes.cardContent}
        >
          <Typography className={classes.typography} variant="h3">
            { value }
          </Typography>
          <Typography className={classes.typography} variant="subtitle2">
            { title }
          </Typography>
        </Grid>
      </Card>
    );
  }
}

TableCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableCard);
