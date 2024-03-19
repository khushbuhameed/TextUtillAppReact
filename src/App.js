//  import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import FormSub from './components/FormSub'; 
// import Alert from './components/Alert';
// import { Form } from 'react-router-dom';

// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
const [mode, setmode] = useState('light')//wheather dark mode is enabled or not??
//  const [alert, setAlert] = useState(null);

//  const showAlert = (message, type) =>{
//        setAlert = ({
//            msg: message,
//            type: type
//        })
//  }

const toggleMode = () =>{
   if(mode ===  'light'){
     setmode ('dark');
     document.body.style.backgroundColor = 'darkgreen';
    // showAlert("dark mode has been enabled", "success");
   }
   else{
      setmode ('light');
      document.body.style.backgroundColor = 'white';
     // showAlert("light mode has been enabled", "success");
   }
}

  return (
    <>
    {/* <Router> */}
  <Navbar title="textutil" aboutText ="" mode={mode}toggleMode={toggleMode} /> 
  {/* <Alert alert ="this is alert"/> */}
  

 {/* <Navbar title ="textutil" /> */}
 <div className="container my-3">

 {/* <switch>
      
      <Route path ="/about">
         <About/>
      </Route>
     
      <Route path ="/">
      <TextForm heading ="Enter your text to Analyse Below"/>
      
      </Route>
 </switch> */}
 </div>
 {/* </Router> */}
 <TextForm heading ="Enter your text to Analyse Below"/>
 {/* <About/> */}
   {/* <FormSub first ="Login Form" email ="Enter Your Email"/> */}
 

   </>

  );
}
// import { Form } from 'react-router-dom';

export default App;
