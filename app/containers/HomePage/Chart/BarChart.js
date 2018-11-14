import React, { Component } from 'react';
import PropTypes from 'prop-types';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const SimpleBarChart = ({ source, xKey, yKey, color }) => {
    return (
        <ResponsiveContainer height="100%" width="100%">
            <BarChart
                data={source}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey={xKey} />
                <YAxis />
                <Legend />
                <Tooltip />
                <Bar maxBarSize={40} dataKey={yKey} stackId="a" fill={color} />
            </BarChart>
        </ResponsiveContainer>
    );
};

SimpleBarChart.propTypes = {
    xKey: PropTypes.string.isRequired,
    yKey: PropTypes.string.isRequired,
    source: PropTypes.array.isRequired,
};

export default SimpleBarChart;
