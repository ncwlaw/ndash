import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

import ListItemLink from 'components/ListItemLink';
import GithubImage from 'images/github.png';
import JenkinsImage from 'images/jenkins.svg';
import JiraImage from 'images/jira.png';

import { ICON_SIZE } from './constants';

const styles = theme => ({
  root: {
    width: "100%",
  },
  subheader: {
    padding: "0 24px 5px",
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={
            <ListSubheader
              className={classes.subheader}
              component="div"
            >
              Related Links
            </ListSubheader>
          }
        >
          <Divider/>
          <ListItemLink>
            <ListItemIcon>
              <img src={GithubImage} height={ICON_SIZE} width={ICON_SIZE} />
            </ListItemIcon>
            <ListItemText inset primary="Github pull request" />
          </ListItemLink>
          <Divider/>
          <ListItemLink>
            <ListItemIcon>
              <img src={JenkinsImage} height={ICON_SIZE} width={ICON_SIZE} />
            </ListItemIcon>
          <ListItemText inset primary="Jenkins build link" />
          </ListItemLink>
          <Divider/>
          <ListItemLink>
            <ListItemIcon>
              <img src={JiraImage} height={ICON_SIZE} width={ICON_SIZE} />
            </ListItemIcon>
            <ListItemText inset primary="Jira ticket link" />
          </ListItemLink>
          <Divider/>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
