import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {   
    console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);    
  }  

  const handleLowClick = () => {   
    console.log('Uppercase was clicked');
    let newText = text.toLocaleLowerCase();
    setText(newText);    
  }  

  const handleClearClick = () => {   
    console.log('Uppercase was clicked');
    let newText = '';
    setText(newText);    
  }   

  const handleCopyClick = () => {
    var newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }

  const handleExtraSpacesClick = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event) => {     
    console.log('On Change was clicked');
    setText(event.target.value);
  }
    

  return (     
    <>
      <div className='container' style={{color: props.mode === "dark" ? 'white': '#042743'}}>      
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" 
            style={{
              backgroundColor: props.mode === "dark" ? 'grey': 'white',
              color: props.mode === "dark" ? 'white': '#042743'}}
            value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Handle Extra Spaces</button>
      </div> 
      <div className='container my-3' style={{color: props.mode === "dark" ? 'white': '#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{(0.008 * text.split(" ").length).toFixed(3)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length===0 ? "Enter something in the text box to peview here" : text}</p>
      </div>
    </>
  )
}
