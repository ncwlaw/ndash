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

const StackedBarChart = ({ source }) => {
    return (
        <ResponsiveContainer height="100%" width="100%">
            <BarChart
                data={source}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <Tooltip />
                <Bar
                    maxBarSize={40}
                    dataKey="pass"
                    stackId="a"
                    fill={green['400']}
                />
                {/*<Bar dataKey="fail" stackId="a" fill={red['400']} />*/}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedBarChart;
