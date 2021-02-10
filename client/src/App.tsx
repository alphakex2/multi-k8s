import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./App.css"
import Fib from "./components/Fib"
import OtherPage from "./components/OtherPage"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Fibonacci Gen</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <p className="App-intro"></p>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  )
}

export default App
