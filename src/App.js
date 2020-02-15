import React from 'react';
import { MainScreen } from './MainScreen/MainScreen';
import { Router } from '@reach/router'
import { ResultsScreen } from './ResultsScreen/ResultsScreen';

export const App = () => {
  return (
    <Router>
      <MainScreen path='/' />
      <ResultsScreen path='results' />
    </Router>
  );
}

