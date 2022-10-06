import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {

const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" mode = {mode} enableToggleMode = {toggleMode}/>
      <div className="container">
        <TextForm heading = "Enter the text to analyze" mode = {mode}/>
        {/* <About></About> */}
      </div>
      
    </>
  );
}

export default App;
