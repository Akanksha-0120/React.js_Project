import './App.css';
import About from './About';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TextForm from './TextForm';
import Link from './Link';
import React,{useState} from 'react';
import Alert from './Alert';
function App() {

  const[mode,setMode]=useState('Light');

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
       setAlert({
         msg:message,
         type:type,
       }) 

       setTimeout(()=>{
         setAlert(null);
       },3000)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0d0833';
      showAlert("Dark mode turned on","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode turned on","success");
    }
  }

  return (
    <BrowserRouter>
    {/* <Navbar title="Ram Ashish" link="Links" mode={mode} toggleMode={toggleMode}/> */}
    {/*} <Alert alert={alert}/> 
     <TextForm showAlert={showAlert} heading="Enter the text to modify" mode={mode}/>
     {/*<About/>*/}
    <Routes>
      <Route path="/" element={
        <>
        <Navbar title="S&R" link="Links" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm showAlert={showAlert} heading="S&R - Word Counter, Character Counter, and Time Counter" mode={mode}/> 
        </>
      }/>

      <Route path="/Link" element={
        <>
        <Navbar title="Ram Ashish" link="Links" mode={mode} toggleMode={toggleMode}/>
        <Link mode={mode}/>
        </>
        }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;


/*if we remove title="Ram Ashish" then it show default value */