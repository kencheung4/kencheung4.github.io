/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import MainPage from 'containers/MainPage';
import FavouritePage from 'containers/FavouritePage';
import NotFoundPage from 'containers/NotFoundPage';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div``;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/favourites" component={FavouritePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
