import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import * as colors from '@material-ui/core/colors';

const colorMap = [
    colors.red['400'],
    colors.pink['400'],
    colors.purple['400'],
    colors.deepPurple['400'],
    colors.indigo['400'],
    colors.blue['400'],
    colors.lightBlue['400'],
    colors.cyan['400'],
    colors.teal['400'],
    colors.green['400'],
    colors.lightGreen['400'],
    colors.lime['400'],
    colors.yellow['400'],
    colors.amber['400'],
    colors.orange['400'],
    colors.deepOrange['400'],
];
const getColor = i => colorMap[i % colorMap.length];

const WeeklyChart = props => {
    const { colorOffset = 0, source, xAxis, yAxes } = props;
    return (
        <ResponsiveContainer height="100%" width="100%">
            <AreaChart
                data={source}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xAxis} />
                <YAxis />
                <Tooltip />
                {yAxes.map((yAxis, index) => {
                    return (
                        <Area
                            key={yAxis}
                            type="monotone"
                            dataKey={yAxis}
                            stackId="1"
                            stroke={getColor(index + colorOffset)}
                            fill={getColor(index + colorOffset)}
                        />
                    );
                })}
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default WeeklyChart;
