import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from './ListItemText';
import Grid from '@material-ui/core/Grid';
import { compose } from 'recompose';
import { injectIntl, FormattedMessage } from 'react-intl';

import { CATEGORIES } from './constants';

import messages from './messages';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  toolbarContainer: {
    padding: "0 0 0 24px",
  },
  listItemRoot: {
    padding: "0",
  }
});

const Menu = ({ classes, intl }) => {
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
      <List>
        {CATEGORIES.map((text, index) => (
          <ListItem
            key={text}
            button
            classes={{
              root: classes.listItemRoot
            }}
          >
            {console.log(messages[text])}
            <ListItemText text={intl.formatHTMLMessage(messages[text])} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

const enhance = compose(
  injectIntl,
  withStyles(styles, { withTheme: true })
);

export default enhance(Menu);
