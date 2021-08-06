import React from 'react';
import './App.css';

function App() {
  const [cnt, setCnt] = React.useState(0)
  return (
    <div className="QuestionApp" id="QuestionAppID">
      <header className="QuestionApp-header">
        <a
          className="QuestionApp-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <button onClick={() => setCnt(cnt+1)}>
          Click me to run shit
        </button>
        <h2 className="counter">
          Counter = {cnt}
        </h2>
      </div>
    </div>
  );
}

export default App;
