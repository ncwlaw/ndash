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
import CheckIcon from '@material-ui/icons/Check';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    margin: theme.spacing.unit,
    padding: "0 15px",
    fontSize: 14,
    fontWeight: 500,
  },
});

const SuccessChip = ({ classes }) => (
  <Chip
    icon={<CheckIcon />}
    label={<FormattedMessage {...messages.chipSuccessful} />}
    className={classes.root}
    color="primary"
    variant="outlined"
  />
)

SuccessChip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SuccessChip);
