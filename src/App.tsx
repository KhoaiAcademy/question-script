import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="QuestionApp">
      <header className="QuestionApp-header">
        <img src={logo} className="QuestionApp-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="QuestionApp-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
