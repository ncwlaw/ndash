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

const data = [
    { name: 'Pre-Merge', pass: 4000, fail: 2400 },
    { name: 'Post-Merge', pass: 3000, fail: 1398 },
    { name: 'Integration', pass: 2000, fail: 9800 },
    { name: 'Quality', pass: 2780, fail: 3908 },
    { name: 'Canary', pass: 1890, fail: 4800 },
    { name: 'Production', pass: 2390, fail: 3800 },
];

const StackedBarChart = () => {
    return (
        <ResponsiveContainer height="100%" width="100%">
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <Tooltip />
                <Bar dataKey="pass" stackId="a" fill={green['400']} />
                <Bar dataKey="fail" stackId="a" fill={red['400']} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedBarChart;
