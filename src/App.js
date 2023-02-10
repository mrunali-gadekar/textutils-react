
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');    //check wether dark mode is enable or not 
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#1e255e';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils - Dark mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='#dbdfe4';
      showAlert("Light mode has been enabled", "success"); 
      document.title = 'Textutils - Light mode';

    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TEXTUTILS"  AboutText ="About" mode = {mode}  toggleMode ={toggleMode}/>
    <Alerts alert ={alert} />
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert = {showAlert} heading=" Enter Text To Analyse" mode= {mode} />
          </Route>
    </Switch>
    </div>
    </Router>
    </>
      
  );
}

export default App;
