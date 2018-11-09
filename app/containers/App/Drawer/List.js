import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames'
import { withStateHandlers, compose, withProps } from 'recompose';
import { injectIntl, FormattedMessage } from 'react-intl';

import { CATEGORIES } from './constants';
import messages from './messages';
import withCollapse from 'components/utils/collapse';

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
import TimelineIcon from '@material-ui/icons/Timeline';
import ListItemLinkComponent from './ListItemLink';

const ListItemLink = withProps(({ selected, label, ...rest }) => ({
  ...rest,
  label,
  selected: label === selected,
}))(ListItemLinkComponent);

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

const ListComponent = (props) => {
  const {
    isCollapse,
    toggleCollapse,
    onSelect,
    classes,
    intl,
    source,
    selected,
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
          {source.map(project => (
            <ListItemLink
              nested
              className={classes.nested}
              onClick={onSelect}
              key={project}
              to={`/projects/${project}`}
              selected={selected}
              icon={<AssignmentIcon />}
              label={project}
            />
          ))}
        </List>
      </Collapse>
      <ListItemLink
        to="/monitoring"
        selected={selected}
        icon={<TimelineIcon />}
        label={intl.formatMessage(messages.monitoring)}
        onClick={onSelect}
      />
      <ListItemLink
        to="/metrics"
        selected={selected}
        icon={<BarChartIcon />}
        label={intl.formatMessage(messages.deliveryMetrics)}
        onClick={onSelect}
      />
      <ListItemLink
        to="/configure"
        selected={selected}
        icon={<LayersIcon />}
        label={intl.formatMessage(messages.configureProject)}
        onClick={onSelect}
      />
    </List>
  );
};

ListComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const enhance = compose(
  injectIntl,
  withProps({ initialCollapse: true }),
  withCollapse,
  withStateHandlers(
    ({ source }) => ({
      selected: source[0],
    }),
    {
      onSelect: () => (value) => ({
        selected: value,
      }),
    }
  ),
  withStyles(styles, { withTheme: true })
);

export default enhance(ListComponent);
