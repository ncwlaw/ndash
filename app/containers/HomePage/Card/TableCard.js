import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { compose, withStateHandlers } from 'recompose';
import { injectIntl, FormattedMessage } from 'react-intl';
import dateFns from 'date-fns';
import * as R from 'ramda';
import messages from '../messages';

import withCollapse from 'components/utils/collapse';
import { CONTENT } from '../constants';

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
import Grid from '@material-ui/core/Grid';
import { StackedBarChart } from '../Chart';
import { List as ComponentDetails } from '../List';
import Table from '../Table';
import StatusChip from '../Chip';

/**
 * Icons
 *
 */
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BarChartIcon from '@material-ui/icons/BarChart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
    root: {
        position: 'relative',
    },
    actions: {
        flexGrow: 1,
        alignItems: 'flex-end',
        padding: '14px',
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
    chipContainer: {
        padding: '5px 0 10px 0',
        flexShrink: 0,
    },
    componentDetails: {
        overflow: 'auto',
        padding: '10px 0',
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
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    metrics: {
        minHeight: 450,
    },
    build: {
        minHeight: 500,
    },
});

const TableCardContent = ({ title, onChange, source, classes }) => (
    <Grid container direction="column" className={classes.content}>
        <CardHeader
            title={title}
            subheader={dateFns.format(new Date(), 'MMMM D, YYYY ')}
        />
        <Table
            onClick={build => onChange(CONTENT.BUILD, build)}
            source={source}
        />
        <CardActions className={classes.actions} disableActionSpacing>
            <Button
                variant="fab"
                onClick={() => onChange(CONTENT.METRICS)}
                color="primary"
                mini
                className={classes.button}
            >
                <BarChartIcon />
            </Button>
        </CardActions>
    </Grid>
);

const BarChartCardContent = ({ source, classes }) => (
    <div className={classes.cardContent}>
        <StackedBarChart source={source} />
    </div>
);

const BuildDetailCardContent = ({ build, classes }) => (
    <Grid
        className={classes.cardContent}
        container
        direction="column"
        justify="space-between"
        wrap="nowrap"
    >
        <div className={classes.componentDetails}>
            {R.isEmpty(build) ? null : <ComponentDetails build={build} />}
        </div>
        <Grid
            className={classes.chipContainer}
            container
            justify="space-around"
        >
            <StatusChip status={build.buildStatus} />
        </Grid>
    </Grid>
);

const GrowCardContent = ({
    isVisible,
    children,
    title,
    subheader,
    onClick,
    classes,
}) => (
    <Grow in={isVisible} timout="auto" unmountOnExit>
        <div className={classes.growContainer}>
            <CardHeader
                title={<Typography variant="h5">{title}</Typography>}
                subheader={subheader}
                avatar={
                    <IconButton className={classes.arrowBack} onClick={onClick}>
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
            build,
            theme,
            report,
            intl,
        } = this.props;

        return (
            <Card
                className={cn(classes.root, {
                    [classes.build]: content === CONTENT.BUILD,
                    [classes.metrics]: content === CONTENT.METRICS,
                })}
            >
                <TableCardContent
                    classes={classes}
                    title={title}
                    source={source}
                    onChange={onChange}
                />
                <GrowCardContent
                    isVisible={content === CONTENT.METRICS}
                    classes={classes}
                    title={<FormattedMessage {...messages.metrics} />}
                    subheader={
                        <FormattedMessage {...messages.successfulMetrics} />
                    }
                    onClick={onReset}
                >
                    <BarChartCardContent source={report} classes={classes} />
                </GrowCardContent>
                <GrowCardContent
                    isVisible={content === CONTENT.BUILD}
                    classes={classes}
                    title={<FormattedMessage {...messages.buildTitle} />}
                    subheader={
                        <FormattedMessage
                            {...messages.buildSubheader}
                            values={{
                                environment: build.environment,
                                version: build.buildVersion,
                            }}
                        />
                    }
                    onClick={onReset}
                >
                    <BuildDetailCardContent build={build} classes={classes} />
                </GrowCardContent>
            </Card>
        );
    }
}

TableCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOf(Object.values(CONTENT)),
};

const enhance = compose(
    withStateHandlers(
        ({ initialContent = CONTENT.TABLE, initialBuild = {} }) => ({
            content: initialContent,
            build: initialBuild,
        }),
        {
            onChange: () => (value, build = {}) => ({
                content: value,
                build,
            }),
            onReset: () => () => ({
                content: CONTENT.TABLE,
                build: {},
            }),
        },
    ),
    withCollapse,
    injectIntl,
    withStyles(styles),
);

export default enhance(TableCard);
