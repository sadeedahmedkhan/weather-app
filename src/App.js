import React from 'react';
import Home from './home/Home';
import GlobalErrorBoundary from './error_boundaries/GlobalErrorBoundary';
import './App.css';

function App() {
  return (
    <GlobalErrorBoundary>
      <Home />
    </GlobalErrorBoundary>
  );
}

export default App;
