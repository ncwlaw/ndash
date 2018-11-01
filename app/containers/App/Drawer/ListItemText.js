import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames'
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    padding: '8px 16px 8px 24px',
    '&:first-child': {
      paddingLeft: '24px',
    },
  },
  primary: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 500,
    lineHeight: 1.5,
  },
});

const StyledListItemText = ({ classes, className, text }) => {
  return (
    <ListItemText
      className={classes.root}
      primary={text}
      primaryTypographyProps={{
        className: classes.primary
      }}
    />
  );
};

StyledListItemText.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(StyledListItemText);
