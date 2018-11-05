/*
 * Autocomplete
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Autocomplete from 'components/Autocomplete';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    padding: 15,
    minHeight: 70,
    display: "flex",
    alignItems: "center",
  },
  autoCompleteContainer: {
    flexGrow: 1,
  },
  input: {
    borderBottom: 0,
  },
  placeholder: {
    fontWeight: 500,
    borderBottom: 0,
  },
  searchIconContainer: {
    padding: "0 20px 0 0",
  },
});

const SubsystemAutocomplete = (props) => {
  const {
    theme,
    classes,
    ...rest
  } = props;

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <Paper
      className={classes.root}
      elevation={1}
    >
      <Grid
        container
        alignItems="center"
      >
        <Grid
          className={classes.searchIconContainer}
          item
        >
          <SearchIcon color="action"/>
        </Grid>
        <Grid
          className={classes.autoCompleteContainer}
          item
        >
          <Autocomplete
            {...rest}
            styles={selectStyles}
            classes={{
              placeholder: classes.placeholder,
              input: classes.input,
            }}
            componentProps={{
              inputProps: {
                disableUnderline: true,
              },
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

SubsystemAutocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SubsystemAutocomplete);
