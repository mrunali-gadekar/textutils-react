import React, {useState} from 'react'

export default function TextForm(props) {

    const  handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const  handleLowClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");

    }

    const  handleClearClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const  handleOnChanged = (event) =>{
        // console.log("on changed");
        setText(event.target.value);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard ", "success");
    }

    const[text, setText] = useState("Enter text here");
    // text ="new text" //Wrong way to change the state
    // settext("new text") //correct way to change the state
    return (
    <>
    <div className="container my-3" >
        <h1 style={{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea  className="form-control my-4" id="myBox"  onChange={handleOnChanged} value={text}  style={{backgroundColor: props.mode === 'light'?'white':'#303539' , color: props.mode === 'light'?'black':'white'}} rows="8"></textarea>
        </div>
        <button style={{backgroundColor: props.mode === 'dark'?'white':'#1e255e', color: props.mode === 'dark'?'black':'white', border:  'black'}} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button style={{backgroundColor: props.mode === 'dark'?'white':'#1e255e', color: props.mode === 'dark'?'black':'white', border: 'black'}} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
        <button style={{backgroundColor: props.mode === 'dark'?'white':'#1e255e', color: props.mode === 'dark'?'black':'white', border: 'black'}} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button style={{backgroundColor: props.mode === 'dark'?'white':'#1e255e', color: props.mode === 'dark'?'black':'white', border: 'black'}} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
        <button style={{backgroundColor: props.mode === 'dark'?'white':'#1e255e', color: props.mode === 'dark'?'black':'white', border: 'black'}} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3">
        <h1 style={{color: props.mode === 'light'?'black':'white'}} >Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length !=0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2 style={{color: props.mode === 'light'?'black':'white'}} >Preview</h2>
        <p>{text.length>0? text: "Enter some text in above text area"}</p>
    </div>
    </>
  )
}
