import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import MaterialList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import * as R from 'ramda';

import ListItemLink from 'components/ListItemLink';
import GithubImage from 'images/github.png';
import JenkinsImage from 'images/jenkins.svg';
import JiraImage from 'images/jira.png';

import { JIRA_URL, ICON_SIZE } from './constants';
import messages from '../messages';

const styles = theme => ({
    root: {
        width: '100%',
    },
    subheader: {
        padding: '0 24px 5px',
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    list: {
        paddingBottom: theme.spacing.unit * 2,
    },
});

const List = withStyles(styles)(props => {
    const { classes, icon, subheader, children } = props;
    if (R.either(R.isNil, R.isEmpty)(children)) return null;
    return (
        <MaterialList
            className={classes.list}
            component="nav"
            subheader={
                <ListSubheader
                    className={classes.subheader}
                    component="div"
                    disableSticky
                >
                    <Grid container alignItems="center">
                        <ListItemIcon>
                            <img
                                src={icon}
                                height={ICON_SIZE}
                                width={ICON_SIZE}
                            />
                        </ListItemIcon>
                        {subheader}
                    </Grid>
                </ListSubheader>
            }
        >
            {children}
        </MaterialList>
    );
});

class NestedList extends React.Component {
    state = {
        open: true,
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        const { classes, build } = this.props;
        const { commits, tickets, buildUrl, gitRemote } = build;

        return (
            <div className={classes.root}>
                <List
                    subheader={<FormattedMessage {...messages.gitLinks} />}
                    icon={GithubImage}
                >
                    {commits.map(({ id, author, message, timestamp }) => (
                        <React.Fragment key={id}>
                            <Divider />
                            <ListItemLink href={`${gitRemote}/commit/${id}`}>
                                <ListItemText
                                    primary={message}
                                    secondary={author}
                                />
                            </ListItemLink>
                        </React.Fragment>
                    ))}
                </List>
                <List
                    subheader={<FormattedMessage {...messages.jiraLinks} />}
                    icon={JiraImage}
                >
                    {tickets.map(ticket => (
                        <React.Fragment key={ticket}>
                            <Divider />
                            <ListItemLink href={`${JIRA_URL}/browse/${ticket}`}>
                                <ListItemText primary={ticket} />
                            </ListItemLink>
                        </React.Fragment>
                    ))}
                </List>
                <List
                    subheader={<FormattedMessage {...messages.jenkinsLinks} />}
                    icon={JenkinsImage}
                >
                    {[buildUrl].map(build => (
                        <React.Fragment key={build}>
                            <Divider />
                            <ListItemLink href={buildUrl}>
                                <ListItemText primary="Deploy console logs" />
                            </ListItemLink>
                        </React.Fragment>
                    ))}
                </List>
            </div>
        );
    }
}

NestedList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
