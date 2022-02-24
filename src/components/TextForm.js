import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick =()=>{
    // console.log("Uppercase was clicked" +text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick =()=>{
    // console.log("Uppercase was clicked" +text);
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleOnChange =(event)=>{
    // console.log("Onchange was clicked");
    setText(event.target.value);
  }
  const handlecopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  // const [text,setText]=useState('Enter text here');
const [text,setText]=useState('');
  // text ="new text";  // wrong way to change the state
  // setText("dfasdfdfsdf");
  // setText("new text"); // correct way to change the state
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
       <div className="mb-3">
    
    <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
      
  <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handlecopy} >Copy Text</button>
  <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    
    </div>
    <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").length}words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length}Minutes Read</p>
          <h3>Preview</h3>
          <p>{text}</p>


    </div>
    </>
  )
}
