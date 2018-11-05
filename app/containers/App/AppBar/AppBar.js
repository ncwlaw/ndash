import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from 'images/nv_white.png';

const drawerWidth = 240;
const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
});

function StyledAppBar(props) {
  const { classes } = props;
  return (
    <AppBar
      className={classes.appBar}
      position="fixed"
      color="primary"
    >
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <div className={classes.grow}>
          <img src={logo} height="100%" width="150" />
        </div>
        {/*<Button color="inherit">Login</Button>*/}
      </Toolbar>
    </AppBar>
  )
}

StyledAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(StyledAppBar);
