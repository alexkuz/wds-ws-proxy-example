import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  React.useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/ws-proxy');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <ul>
          <li>Start the server with <pre>node src/server.js</pre></li>
          <li>(Re)open this page</li>
          <li>Dev server goes down with <pre>Error: read ECONNRESET</pre> error</li>
          </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
