import Home from './home/Home';

import './App.css';
import GlobalErrorBoundary from './error_boundaries/GlobalErrorBoundary';

function App() {
  return (
    <GlobalErrorBoundary>
      <Home />
    </GlobalErrorBoundary>
  );
}

export default App;
