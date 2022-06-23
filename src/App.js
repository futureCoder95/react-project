// import React from 'react'
import About from './About';
import Navbar from "./Navbar";
import Textarea from './Textarea';
import React, { useState } from 'react'
import Alert from "./Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1900);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "Success:")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "Success:")

    }
  }



  return (
    <>
      <Router>
        <Navbar title="Text-Convertor" home="Home" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">

          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Textarea showAlert={showAlert} heading="Text-Convertor | Word Counter | Word Converter" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  )
}
