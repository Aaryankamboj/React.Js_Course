// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message, type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);

  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }
  const [text, setText] = useState("Dark");
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success")
      setText('Light');
    //   setInterval(() => {
    //     document.title = "TextUtils is amazing";
    //   }, 2000);
    //   setInterval(() => {
    //     document.title = "TextUtils download karo";
    //   }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success");
      setText("Dark");
    }
  }


  const [text2, setText2] = useState("light");

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} text={text} text2={text2} toggleMode={toggleMode} />
        <Alert alert={alert} mode={mode} />
        {/* <Navbar/> */}
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Try TextUtils - Word counter, character counter" mode={mode} showAlert={showAlert} />}>
            </Route>
            <Route path="/about" element={<About mode= {mode} />}>
            </Route>


          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
