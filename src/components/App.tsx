import React from 'react'
import { Http } from '../lib'

function App() {
  const [cnt, setCnt] = React.useState(0)
  const submitHandler = () => Http.submitAnswer('abcde', 100)
  
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
      <div>
        <button onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default App
