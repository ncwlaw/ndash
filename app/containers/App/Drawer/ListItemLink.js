import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { combineStyles } from 'utils/styles';
import { compose, branch, renderComponent } from 'recompose';
import { propEq } from 'ramda';

import Link from 'react-router-dom/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    link: {
        textDecoration: 'none',
    },
});

const nestedStyles = combineStyles(styles, theme => ({
    listItem: {
        paddingLeft: theme.spacing.unit * 4,
    },
}));

const ListItemLink = props => {
    const { classes, to, label, icon, selected, onClick } = props;
    return (
        <Link className={classes.link} to={to}>
            <ListItem
                button
                onClick={() => onClick(label)}
                selected={selected}
                className={classes.listItem}
            >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText inset primary={label} />
            </ListItem>
        </Link>
    );
};

ListItemLink.propTypes = {
    classes: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    selected: PropTypes.bool.isRequired,
};

ListItemLink.defaultProps = {
    to: '#',
    label: '',
    selected: false,
};

const StyledListItemLink = withStyles(styles, { withTheme: true })(
    ListItemLink,
);
const NestedItemLink = withStyles(nestedStyles, { withTheme: true })(
    ListItemLink,
);
const enhance = branch(propEq('nested', true), renderComponent(NestedItemLink));

export default enhance(StyledListItemLink);
