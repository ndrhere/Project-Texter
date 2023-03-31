import React from 'react'

const Alert = (props) => {
  const capital = (word)=>{
      let capitalize = word.toLowerCase();
       return capitalize.charAt(0).toUpperCase() + capitalize.slice(1)
  };
  return (
    <div style={{height:'50px'}}>
{props.alert &&(
    <div  className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert">
    
         <strong>{capital(props.alert.type)}</strong> : <strong>{props.alert.msg}</strong>
</div>
)}
  
  </div>
  )
}

export default Alert