/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from './AppBar';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Drawer from './Drawer';
import Main from './Main';
import Wrapper from './Wrapper';

import GlobalStyle from 'global-styles';

export default function App() {
  return (
    <Wrapper>
      <CssBaseline />
      <AppBar />
      <Drawer />
      <Main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Main>
      <GlobalStyle />
    </Wrapper>
  );
}
