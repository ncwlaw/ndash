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
import SyncIcon from '@material-ui/icons/Sync';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    margin: theme.spacing.unit,
    padding: "0 15px",
    fontSize: 14,
    fontWeight: 500,
  },
});

const PendingChip = ({ classes }) => (
  <Chip
    icon={<SyncIcon />}
    className={classes.root}
    label={<FormattedMessage {...messages.chipPending} />}
    color="primary"
    variant="outlined"
  />
)

PendingChip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PendingChip);
