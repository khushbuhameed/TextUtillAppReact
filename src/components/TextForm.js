import React, { Component, useState } from 'react'



export default function TextForm(props){ 
  
    const handleUpClick = () =>{
        // console.log("UpperCase Was Clicked!!" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () =>{
      let lowerText = text.toLowerCase();
      setText(lowerText);
    }
    const clearText = () =>{
        let Textclear =  '';
        setText(Textclear);
       // console.log(Textclear);
    }
    //  const captalizeCase = () =>{
    //    let captlizationCase = text.repeat();
    //    setText(captlizationCase );
    //  }

    const handleOnChange =(event) =>{
        // console.log("OnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //   setText("enetr your new text");
    return (
        <>
         <div className='container'>
        <h1>{props.heading}</h1>
  <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnChange}  id="MyText" rows="12"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
  <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
  {/* <button className="btn btn-primary mx-1" onClick={captalizeCase}>Captalization Case</button> */}

      </div>
      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length}character</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p> {text}</p>
      </div>
      </>
    )
  }



