import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as R from 'ramda';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const createData = ({
  id,
  system,
  subsystem,
  comp,
  dev,
  qa,
  stage,
  performance,
  canary,
  production
}) => ({
  id,
  system,
  subsystem,
  comp,
  dev,
  qa,
  stage,
  performance,
  canary,
  production
});

const rows = [
  {
    id: 0,
    system: "NGC",
    subsystem: "COSMOS",
    comp: "Kafka",
    dev: "1.0.10",
    qa: "1.0.8",
    stage: "1.0.5",
    performance: "1.0.3",
    canary: undefined,
    production: undefined,
  },
  {
    id: 1,
    system: "NGC",
    subsystem: "COSMOS",
    comp: "Parsec",
    dev: "1.0.10",
    qa: "1.0.8",
    stage: "1.0.5",
    performance: "1.0.3",
    canary: undefined,
    production: undefined,
  },
  {
    id: 2,
    system: "NGC",
    subsystem: "COSMOS",
    comp: "Ingress",
    dev: "1.0.10",
    qa: "1.0.8",
    stage: "1.0.5",
    performance: "1.0.3",
    canary: undefined,
    production: undefined,
  },
  {
    id: 3,
    system: "NGC",
    subsystem: "COSMOS",
    comp: "DSS",
    dev: "1.0.10",
    qa: "1.0.8",
    stage: "1.0.5",
    performance: "1.0.3",
    canary: undefined,
    production: undefined,
  },
  {
    id: 4,
    system: "NGC",
    subsystem: "COSMOS",
    comp: "Test Framework",
    dev: "1.0.10",
    qa: "1.0.8",
    stage: "1.0.5",
    performance: "1.0.3",
    canary: undefined,
    production: undefined,
  },
  {
    id: 5,
    system: "Maglev",
    subsystem: "Platforms",
    comp: undefined,
    dev: undefined,
    qa: undefined,
    stage: undefined,
    performance: undefined,
    canary: undefined,
    production: undefined,
  },
  {
    id: 6,
    system: "CI Infrastructure",
    subsystem: "Jenkins Sandbox",
    comp: undefined,
    dev: undefined,
    qa: undefined,
    stage: undefined,
    performance: undefined,
    canary: undefined,
    production: undefined,
  },
  {
    id: 7,
    system: "CI Infrastrucutre",
    subsystem: "Jenkins Production",
    comp: undefined,
    dev: undefined,
    qa: undefined,
    stage: undefined,
    performance: undefined,
    canary: undefined,
    production: undefined,
  },
];

const generate = R.map(createData);

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>System</TableCell>
          <TableCell>Sub-System</TableCell>
          <TableCell>Component</TableCell>
          <TableCell>Development</TableCell>
          <TableCell>Quality Assurance</TableCell>
          <TableCell>Staging</TableCell>
          <TableCell>Performance</TableCell>
          <TableCell>Canary</TableCell>
          <TableCell>Production</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {generate(rows).map(row => {
          return (
            <TableRow key={row.id}>
              <TableCell>{row.system}</TableCell>
              <TableCell>{row.subsystem}</TableCell>
              <TableCell>{row.comp}</TableCell>
              <TableCell>{row.dev}</TableCell>
              <TableCell>{row.qa}</TableCell>
              <TableCell>{row.stage}</TableCell>
              <TableCell>{row.performance}</TableCell>
              <TableCell>{row.canary}</TableCell>
              <TableCell>{row.production}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
