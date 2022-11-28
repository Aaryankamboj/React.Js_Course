// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');

  /*
  const [mode, setMode]=useState({
    color: 'dark', backgroundColor:"light", primaryClr: "primary", greenClr:"success", lightClr:"light"
  })
  const switchToGreen = ()=>{
     setMode({
      color: 'dark',  backgroundColor:'green', primaryClr:"primary", greenClr:"sucess",lightClr:"light"
     })
  }
  const switchToBlue = ()=>{
    setMode({
     color: 'light',  backgroundColor:'primary', primaryClr:"primary", greenClr:"sucess",lightClr:"light"
    })
 }
 */
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message, type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);

  }
  const [text, setText] = useState("Dark");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode";
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
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";

      setText("Dark");
    }
  }


  const [text2, setText2] = useState("light");
  const [noBlue, toBlue] = useState("light");
  const toggleBlue = () => {
    if (noBlue === 'blue') {
      toBlue('light');
      document.body.style.backgroundColor = 'white';
      setText2("Blue")
      // showAlert("Blue Mode has been enabled", "success");
    }
    else {
      toBlue('#85aae1');
      document.body.style.backgroundColor = '#85aae1';
      setText2("Light");
      // showAlert("Blue Mode has been disabled", "warning");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="AboutTextUtils" mode={mode} noBlue={noBlue} text={text} text2={text2} toggleMode={toggleMode} toggleBlue={toggleBlue} />
        <Alert alert={alert} mode={mode} />
        {/* <Navbar/> */}
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element={<About/>}>
            </Route>

            <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}>
            </Route>

          </Routes> */}
          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
