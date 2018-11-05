import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames'
import { compose } from 'recompose';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from './List';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  toolbarContainer: {
    padding: "0 0 0 24px",
  },
});

const Menu = ({ classes, intl, projects }) => {
  return (
    <React.Fragment>
      <Grid
        className={cn(
          classes.toolbar,
          classes.toolbarContainer
        )}
        container
        direction="column"
        alignItems="flex-start"
        justify="space-around"
      >
        <Grid item xs={12}>
          <Typography align="justify" color="textSecondary" variant="h6">
            <FormattedMessage {...messages.header} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="justify" variant="caption">
            <FormattedMessage {...messages.version} />
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <List source={projects}/>
    </React.Fragment>
  );
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

const enhance = compose(
  withStyles(styles, { withTheme: true })
);

export default enhance(Menu);
