import React from 'react'

function About(props) {
  return (
    <div className = "container " style={{color: props.mode==='dark'? 'white' : 'black'}}>
<h2> Texter.Inc- Text Editor</h2>
<p className="my-4" style={{lineHeight: "2rem"}}>"Welcome to our React Text Editor application! This application is designed to help you quickly and easily manipulate any text that you write. With our text editor, you can change the case of your text to uppercase or lowercase, remove extra spaces, copy your text, and clear it all with just a few clicks. Our application is built using the React library, which allows for dynamic and efficient updates to the user interface. It is also designed to be responsive, so it works seamlessly on any device, whether you're using a desktop, tablet, or smartphone. We hope you enjoy using our text editor and find it useful for all your writing needs. The user's feedback for improvement is always welcome."</p>



    </div>
  )
}

export default About