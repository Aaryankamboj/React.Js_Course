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

//    const [numbers, setNumbers]=useState('');
//    const handlePhoneNumbers = ()=>{
//     let data = text.split(" ");
//     let numbers = new Array;
//     data.forEach((ele)=>{
//         if(ele.length === 10 && !isNaN(Number(ele))){
//             numbers.push(ele);
//         }

//     });
//     setNumbers(numbers);

   
    const [text, setText] = useState('');
    function words() {
        /*
     # this function returns the number of words  so please use words()
     # this is perfect function but not sure, Harry Bhai will decide it 
        
    */
        let words = text.trim().split(" ").length;
        if (words === 1 && text.split(" ")[0] === "") {
          words = 0;
          return words;
        } else {
          return words;
        }
      }
    
    return (
        <>
            <div className={`container text-${props.mode==='light'?'black':'light'}`}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea value={text} class="form-control" onChange={handleOnchange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}> Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleDownload}> Download</button>
                <button className="btn btn-primary mx-2" onClick={handleDiff}> Convert Differently</button>
                {/* <button className="btn btn-primary mx-2" onClick={handlePhoneNumbers}> Filter Phone Numbers</button> */}
            </div>

            <div className={`container my-2 text-${props.mode==='light'?'black':'light'}`}>
                <h2>Your text summary </h2>
                <p> <b>{text.split(" ").length-1}</b> Words and <b> {text.length} </b> characters </p>
                <p> {0.008 * text.split(" ").length } Minutes Read </p>
                <h2>Preview</h2>
                <p> {text}</p>
                
            </div>
        </>
    )
}
