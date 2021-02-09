import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
import TodoPage from "./containers/todoPage";
import ContactPage from "./containers/contactPage";
import CreatePage from "./containers/createPage";
import HelloComponent from "./components/HelloComponent";
import { Goodbye } from './components/Goodbye';

function App() {
  // [name, function]
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("HelloWorld");
  const [aCount, setACount] = useState(0);
  
  useEffect(() => {
    /// what will i do
    setInterval(() => {
      setACount((prev) => prev + 1);
    }, 1000);
  }, [])

  const minusNumber = (num) => {
    if (num > 0)
    {
      return "Greater than zero"
    }
    else if (num < 0)
    {
      return "Less than zero"
    }
    else
      return "zero"
  };


  return (
    <div className="App">
      <Router>
        <Link to="/">
          <h1>todo</h1>
        </Link>
        <Link to="/contact">
          <h1>contact</h1>
        </Link>
        <Link to="/create">
          <h1>create</h1>
        </Link>

        {/* component */}
        <HelloComponent name = {msg} lastname = "J." age = {count}/>
        <Goodbye nickname = "KMITL"/>

        <Switch>
          <Route exact path="/" component={TodoPage}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/create" component={CreatePage}/>
        </Switch>
      </Router>
      <hr />
      <button onClick = {() => {
        {/* callback function */}
        setCount(prev => prev + 1)
      }}>
          Plus
      </button>

      <button onClick = {() => {
        setCount(prev => prev - 1)
      }}>
          Minus
      </button>
      <button onClick = {() => {
        setCount(prev => prev * 2)
      }}>
          Muti
      </button>

      <h1>{minusNumber(1)}</h1>
      <h1>{count}</h1>
      {/* <h1>{minusNumber}</h1> */}
      <h1>{aCount}</h1>
      <hr />

      {/* Input */}
      <h1>Input in text</h1>
      <input type = "text" onChange = { (event) => setMsg(event.target.value)}/>
      <h1>{msg}</h1>

      <h1 onMouseOver = {() => setCount((prev) => prev + 1)}>{count}</h1>
    </div>
  );
}

export default App;
