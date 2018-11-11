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
import { DEFAULT_PROJECTS } from './constants';

import GlobalStyle from 'global-styles';

export default function App() {
  return (
    <Wrapper>
      <CssBaseline />
      <AppBar />
      <Drawer projects={DEFAULT_PROJECTS}/>
      <Main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects/:name" component={HomePage} />
          <Route exact path="/monitoring" component={NotFoundPage} />
          <Route exact path="/metrics" component={NotFoundPage} />
          <Route exact path="/configure" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Main>
      <GlobalStyle />
    </Wrapper>
  );
}
