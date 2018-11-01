import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  root: {
    overflowX: 'auto',
  },
});

class TableCard extends React.Component {
  render() {
    const { classes, children } = this.props;

    return (
      <Card>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="CICD Workflow Status"
          subheader="September 14, 2016"
        />
        <div className={classes.root}>
          { children }
        </div>
      </Card>
    );
  }
}

TableCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableCard);
