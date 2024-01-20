import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success")
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!","success")
    }    

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }    


    const handleCopy = () => {
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success")
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Listen Your Text!","success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success")
    }



    const [text, setText] = useState('');

  return (
    <>
        <div className='container' style={{color: props.mode=== 'dark'?'white':'#0f032d'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'#0f032d':'white', color: props.mode=== 'dark'?'white':'#0f032d'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleSpeak}>Speak Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className='container my-3' style={{color: props.mode=== 'dark'?'white':'#0f032d'}}>
            <h2>Your text Summary</h2>
            <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text in the textbox to Preview"}</p>
        </div>

    </>
    
  )
}
