import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light');  
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if (mode==='light') {
        setMode('dark');
        document.body.style.backgroundColor = '#0f032d';
        showAlert("Dark Mode has been Enabled", "Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "Success");
    }
  }


  return (

    <>
    {/* <BrowserRouter> */}
      <Navbar title="Text Utility App" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={ <About />} /> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert} />} /> */}
            <TextForm heading="Text Utility App - Word & Character Counter, Text to Speach" mode={mode} showAlert={showAlert} />
            {/* <About mode={mode} toggleMode={toggleMode} /> */}
          {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    </>

  );
}

export default App;
