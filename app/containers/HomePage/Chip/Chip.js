import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, branch, renderComponent } from 'recompose';
import * as R from 'ramda';

import FailChip from './FailChip';
import SuccessChip from './SuccessChip';
import PendingChip from './PendingChip';

const StatusChip = compose(
    branch(R.propEq('status', 'fail'), renderComponent(FailChip)),
    branch(R.propEq('status', 'success'), renderComponent(SuccessChip)),
)(PendingChip);

export default StatusChip;
