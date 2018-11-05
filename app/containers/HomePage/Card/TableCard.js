import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { compose, withStateHandlers } from 'recompose';
import dateFns from 'date-fns';

import withCollapse from 'components/utils/collapse';

/**
 * Components
 *
 */
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { StackedBarChart } from '../Chart';
import { List as ComponentDetails } from '../List';
import Table from '../Table';

/**
 * Icons
 *
 */
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BarChartIcon from '@material-ui/icons/BarChart';
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  root: {
    position: 'relative',
  },
  actions: {
    flexGrow: 1,
    alignItems: "flex-end",
    padding: "14px",
  },
  button: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: 0,
    },
  },
  content: {
    overflowX: 'auto',
    minHeight: 'inherit',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  chip: {
    margin: theme.spacing.unit,
    padding: "0 15px",
    fontSize: 14,
    fontWeight: 500
  },
  chipAvatarIcon: {
    backgroundColor: '#fff',
    color: theme.palette.primary.main,
  },
  chipContainer: {
    padding: 20,
  },
  componentDetails: {
    padding: '20px 0',
  },
  cardContent: {
    height: 'calc(100% - 80px)',
  },
  arrowBack: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    marginLeft: -8,
  },
  growContainer: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  growContent: {
    minHeight: 450,
  },
});

const TableCardContent = ({
  title,
  onChange,
  source,
  classes,
}) => (
  <Grid container direction="column" className={classes.content}>
    <CardHeader
      title={title}
      subheader={dateFns.format(new Date(), 'MMMM D, YYYY ')}
    />
    <Table
      onClick={() => onChange("build")}
      source={source}
    />
    <CardActions className={classes.actions} disableActionSpacing>
      <Button
        variant="fab"
        onClick={() => onChange("metrics")}
        color="primary"
        mini
        className={classes.button}
      >
        <BarChartIcon />
      </Button>
    </CardActions>
  </Grid>
);

const BarChartCardContent = ({ classes }) => (
  <div className={classes.cardContent}>
    <StackedBarChart />
  </div>
);

const BuildDetailCardContent = ({ classes }) => (
  <Grid
    className={classes.cardContent}
    container
    direction="column"
    justify="space-between"
  >
    <div className={classes.componentDetails}>
      <ComponentDetails />
    </div>
    <Grid
      className={classes.chipContainer}
      container
      justify="space-around"
    >
      <Chip
        icon={<CheckIcon />}
        label="Successful"
        className={classes.chip}
        classes={{
          root: classes.chip,
          avatarColorPrimary: classes.chipAvatarIcon,
        }}
        color="primary"
        variant="outlined"
      />
    </Grid>
  </Grid>
);

const GrowCardContent = ({
  isVisibile,
  children,
  title,
  onClick,
  classes,
}) => (
  <Grow in={isVisibile} timout="auto" unmountOnExit>
    <div className={classes.growContainer}>
      <CardHeader
        title={<Typography variant='h5'>{title}</Typography>}
        disableTypography
        avatar={
          <IconButton
            className={classes.arrowBack}
            onClick={onClick}
          >
            <ArrowBackIcon />
          </IconButton>
        }
      />
      {children}
    </div>
  </Grow>
);

class TableCard extends React.Component {
  render() {
    const {
      classes,
      title,
      source,
      content,
      onChange,
      onReset,
    } = this.props;

    return (
      <Card
        className={cn(
          classes.root,
          {
            [classes.growContent]: content !== "table"
          }
        )}
      >
        <TableCardContent
          classes={classes}
          title={title}
          source={source}
          onChange={onChange}
        />
        <GrowCardContent
          isVisibile={content === "metrics"}
          classes={classes}
          title="Metrics"
          onClick={onReset}
        >
          <BarChartCardContent classes={classes} />
        </GrowCardContent>
        <GrowCardContent
          isVisibile={content === "build"}
          classes={classes}
          title="Build Details"
          onClick={onReset}
        >
          <BuildDetailCardContent classes={classes} />
        </GrowCardContent>
      </Card>
    );
  }
}

TableCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOf([
    "metrics",
    "build",
    "table",
  ]),
};

const enhance = compose(
  withStateHandlers(
    ({ initialContent = "table" }) => ({
      content: initialContent,
    }),
    {
      onChange: () => (value) => ({
        content: value,
      }),
      onReset: () => () => ({
        content: "table",
      })
    }
  ),
  withCollapse,
  withStyles(styles)
);

export default enhance(TableCard);
