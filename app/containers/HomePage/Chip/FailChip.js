import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

/**
 * Components
 *
 */
import Chip from '@material-ui/core/Chip';

/**
 * Icons
 *
 */
import CloseIcon from '@material-ui/icons/Close';

/*
 * Colors
 *
 */
import red from '@material-ui/core/colors/red';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.common.white,
        margin: theme.spacing.unit,
        padding: '0 15px',
        fontSize: 14,
        fontWeight: 500,
        backgroundColor: '#fff',
        borderColor: red['500'],
        color: red['500'],
    },
});

const FailChip = ({ classes }) => (
    <Chip
        icon={<CloseIcon />}
        label={<FormattedMessage {...messages.chipFailure} />}
        className={classes.root}
        color="primary"
        variant="outlined"
    />
);

FailChip.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FailChip);
