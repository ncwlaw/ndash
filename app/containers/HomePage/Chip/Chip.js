import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, branch, renderComponent } from 'recompose';
import * as R from 'ramda';

import FailChip from './FailChip';
import SuccessChip from './SuccessChip';
import PendingChip from './PendingChip';

const StatusChip = compose(
    branch(R.propEq('status', 'FAILURE'), renderComponent(FailChip)),
    branch(R.propEq('status', 'SUCCESS'), renderComponent(SuccessChip)),
)(PendingChip);

export default StatusChip;
