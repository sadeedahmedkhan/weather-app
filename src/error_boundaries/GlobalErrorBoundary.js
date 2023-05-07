import React from 'react';

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error: ', error);
    console.log('Error Information: ', errorInfo);
  }

  render() {
    if (this.state.hasError)
      return (
        <div>
          <h4>Something unlucky happened :(</h4>
          <h1>Refreshing the page might fix me!</h1>
        </div>
      );

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
