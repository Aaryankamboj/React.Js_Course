import React, { useState } from 'react'
export default function TextForm(props) {
    
    const handleUpClick = () => {
        console.log("Uppercase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")

    }
    const handleOnchange = (event) => {
        console.log("On change clicked");
        setText(event.target.value);

    }
    const handleClear = ()=>{         
         setText('');
        props.showAlert("Text Cleared","success")

    }

    const handleDownload=()=>{
        const element = document.createElement("a");
        const file = new Blob([text],{
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download="myfile.txt";
        element.click();
        props.showAlert("File Downloaded","success")

    }

   const handleDiff = ()=>{
    let words = text.split(" ");
    let uppercaseFirst = '';
    words.forEach(element=>{
        uppercaseFirst+=element.charAt(0).toUpperCase() + element.slice(1)+" "
    });
    setText(uppercaseFirst);

   }
   const handleCopyText = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success")

   }
   
    const [text, setText] = useState('');

    
    return (
        <>
            {/* <div className={`container text-${props.mode==='light'?'black':'light'}`}> */}
            <div className="container">
                <h1 className='mb-3'>{props.heading} </h1>
                <div className="mb-3">
                    <textarea value={text} class="form-control" onChange={handleOnchange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}> Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}> Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownload}> Download</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDiff}> Convert Differently</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyText}> Copy Text</button>
            </div>

            {/* <div className={`container my-2 text-${props.mode==='light'?'black':'light'}`}> */}
            <div className="container">

                <h2 className='my-2'>Your text summary </h2>
                <p> <b>{text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length}</b> Words and <b> {text.length} </b> characters </p>
                <p> {0.008 * text.split(" ").filter((elem)=>{return elem.length!==0}).length } Minutes Read </p>
                <h2>Preview</h2>
                <p> {text.length>0?text: "Nothing to preview!"}</p>                
            </div>
        </>
    )
}
