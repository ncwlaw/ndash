import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        maxWidth: '100vw',
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

function Main(props) {
    const { classes } = props;
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {props.children}
        </main>
    );
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    children: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);
