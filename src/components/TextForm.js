import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter Text here');

  const handleUpClick = () => {   
    console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
  }  

  const handleOnChange = (event) => {     
    console.log('On Change was clicked');
    setText(event.target.value);
  }  

  return (     
    <div>      
        <h1>{props.heading}</h1>      sdfdsf
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
