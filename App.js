import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      greeting: 'Hello, React!'
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default App;
