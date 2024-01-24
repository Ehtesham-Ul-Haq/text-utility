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
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
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

    const capitalizeFirstLetter = () => {
        let capText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(capText);
        props.showAlert("First Letter Capitalized!","success")
    }


    const [text, setText] = useState('');

  return (
    <>
        <div className='container' style={{color: props.mode=== 'dark'?'white':'#0f032d'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'#0f032d':'white', color: props.mode=== 'dark'?'white':'#0f032d'}} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleUpClick}>Convertdangerercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={capitalizeFirstLetter}>capitalize First Letter</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleSpeak}>Text to Speach</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className='container my-3' style={{color: props.mode=== 'dark'?'white':'#0f032d'}}>
            <h2>Your text Summary</h2>
            <p>{text.length>0 ? text.trim().split(/\s+/).length : 0} words and {text.length} Characters</p>
            {/* or */}
            {/* <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p> */}

            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text in the textbox to Preview"}</p>
        </div>

    </>
    
  )
}
