import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames'
import { withStateHandlers, compose } from 'recompose';
import { injectIntl, FormattedMessage } from 'react-intl';

import { CATEGORIES } from './constants';
import messages from './messages';

import Link from  'react-router-dom/Link';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  listItemRoot: {
    padding: "0",
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  link: {
    textDecoration: 'none',
  },
});

const Menu = (props) => {
  const {
    isCollapse,
    toggleCollapse,
    classes,
    intl
  } = props;
  return (
    <List
      component="nav"
      subheader={(
        <ListSubheader component="div">
          <FormattedMessage {...messages.navigation}/>
        </ListSubheader>
      )}
    >
      <ListItem button onClick={toggleCollapse}>
        <ListItemIcon>
          <FileCopyIcon />
        </ListItemIcon>
        <ListItemText inset primary={intl.formatMessage(messages.pipelines)}/>
        {isCollapse ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isCollapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link className={classes.link} to='/'>
            <ListItem button selected className={classes.nested}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText inset primary="COSMOS" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <Link className={classes.link} to='monitoring'>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText inset primary={intl.formatMessage(messages.monitoring)} />
        </ListItem>
      </Link>
      <Link className={classes.link} to='metrics'>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText inset primary={intl.formatMessage(messages.deliveryMetrics)} />
        </ListItem>
      </Link>
      <Link className={classes.link} to='configure'>
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText inset primary={intl.formatMessage(messages.configureProject)} />
        </ListItem>
      </Link>
    </List>
  );
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

const enhance = compose(
  injectIntl,
  withStateHandlers(
    ({ initialCollapse = true }) => ({
      isCollapse: initialCollapse
    }),
    {
      toggleCollapse: ({ isCollapse }) => () => ({
        isCollapse: !isCollapse
      }),
    },
  ),
  withStyles(styles, { withTheme: true })
);

/*
<List>
  {CATEGORIES.map((text, index) => (
    <ListItem
      key={text}
      button
      classes={{
        root: classes.listItemRoot
      }}
    >
      <ListItemText text={intl.formatMessage(messages[text])} />
    </ListItem>
  ))}
</List>
*/
export default enhance(Menu);
