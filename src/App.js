
import './App.css';
import React from 'react'
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import { useState } from 'react';
import Alert from './Component/Alert';

const App = () => {
const [mode, setMode]= useState('light')
const [alert, setAlert]= useState(null)



const showAlert =(message, type)=> {
   setAlert({
    msg:message,
    type:type
   });
   setTimeout(()=>{
    setAlert(null)
   }, 2000)
   
}


const toggleMode= ()=>{
  if(mode==='light'){
    setMode('dark')
     document.body.style.backgroundColor= 'rgba(52,53,65,1)'
     showAlert( 'Dark Mode has been enabled', 'success')
    
  }else{
    setMode('light')
    document.body.style.backgroundColor= 'white'
    showAlert('Light Mode has been enabled', 'success' )
  }
  
}






  return (
    <>
    
    <Navbar toggleMode={toggleMode}
      mode={mode}/>

      <Alert alert={alert}
      />
     
      <div className=" container my-3 ">
         <Textform mode={mode}
         alert={alert}
         showAlert={showAlert}/>
       




    </div>
    </>
  )
}

export default App
