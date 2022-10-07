import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

const [mode, setMode] = useState('light')
const [greenMode, setGreenMode] = useState(false)
const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const toggleGreenMode = () => {
    if(greenMode === false) {
      setGreenMode(true);
      document.body.style.backgroundColor = '#78f098';
      showAlert("Green mode has been enabled", "success");
      document.title = "TextUtils - Green Mode";

      // setInterval( () => {
      //   document.title('TextUtils is Amazing Mode')
      // }, 2000)

      // setInterval( () => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500)

    }
    else {
      setGreenMode(false);
      document.body.style.backgroundColor = 'white';
      showAlert("Green mode has been disabled", "success");
    }
  }

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title = "TextUtils" aboutText = "About" mode = {mode} enableToggleMode = {toggleMode} greenMode =  {greenMode === true ? "success" : "primary"} enableGreenToggleMode = {toggleGreenMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About/>} /> 
            <Route exact path="/" element={<TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode} greenMode = {greenMode === true ? "success" : "primary"}/>} />
          </Routes>
          
          {/* <About></About> */}
        </div>
      </Router>
      
    </>
  );
}

export default App;
