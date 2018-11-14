import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import common from '@material-ui/core/colors/common';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Cancel';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import { branch, renderComponent, compose } from 'recompose';
import withCollapse from 'components/utils/collapse';
import { AreaChart, BarChart } from '../Chart';
import * as R from 'ramda';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

const styles = theme => ({
    root: {
        height: '250px',
        margin: '20px 0',
        position: 'relative',
    },
    cardContent: {
        height: '100%',
    },
    infoIcon: {
        color: '#fff',
    },
    typography: {
        color: common['white'],
    },
    infoButton: {
        right: '0',
        position: 'absolute',
        zIndex: theme.zIndex.high,
    },
    growContainer: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        position: 'absolute',
        color: theme.palette.text.primary,
        top: 0,
        left: 0,
    },
    cardTitle: {
        padding: '10px 20px',
    },
});

const CloseIconComponent = () => <CloseIcon />;
const InfoIconComponent = () => <InfoIcon style={{ color: 'white' }} />;

const ActionIcon = branch(
    R.prop('isCollapse'),
    renderComponent(CloseIconComponent),
)(InfoIconComponent);

class MetricCard extends React.Component {
    render() {
        const {
            classes,
            title,
            value,
            color,
            isCollapse,
            theme,
            toggleCollapse,
            source,
            fieldName,
            colorOffset,
        } = this.props;

        return (
            <Card
                style={{ backgroundColor: color, color: '#fff' }}
                className={classes.root}
            >
                <IconButton
                    onClick={toggleCollapse}
                    className={classes.infoButton}
                >
                    <ActionIcon isCollapse={isCollapse} />
                </IconButton>
                <Grid
                    justify="center"
                    direction="column"
                    alignItems="center"
                    container
                    className={classes.cardContent}
                >
                    <Typography className={classes.typography} variant="h3">
                        {value}
                    </Typography>
                    <Typography
                        className={classes.typography}
                        variant="subtitle2"
                    >
                        {title}
                    </Typography>
                </Grid>
                <Grow in={isCollapse} timout="auto" unmountOnExit>
                    <div className={classes.growContainer}>
                        <Grid
                            className={classes.cardContent}
                            container
                            direction="column"
                            wrap="nowrap"
                        >
                            <Grid item>
                                <div className={classes.cardTitle}>
                                    <Typography variant="title">
                                        <FormattedMessage
                                            {...messages.weeklyMetrics}
                                        />
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid xs={12} item>
                                <AreaChart
                                    source={source}
                                    xAxis="id"
                                    yAxes={R.reject(R.equals('id'))(
                                        R.keys(source[0]),
                                    )}
                                    colorOffset={colorOffset}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Grow>
            </Card>
        );
    }
}

MetricCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const enhance = compose(
    withCollapse,
    withStyles(styles),
);

export default enhance(MetricCard);
