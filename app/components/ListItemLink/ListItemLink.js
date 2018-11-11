/**
*
* ListItemLink
*
* Wrapper around ListItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

ListItemLink.propTypes = {
    href: PropTypes.string.isRequired,
};

ListItemLink.defaultProps = {
    href: "#",
};

export default ListItemLink;
