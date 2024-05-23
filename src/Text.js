import React,{useState} from 'react';

const Text =() =>{
    const [text,setText]=useState('');

    const handleUpClick =()=>{
        // Convert to uppercase
        let newText= text.toUpperCase();
        setText(newText);
    };
    const handleLowClick =()=>{
        // Convert to lowercase
        let newText= text.toLowerCase();
        setText(newText);
    };
    const handleRemoveClick =()=>{
        // Convert to uppercase
        let newText= text.split(/[ ]+/).join(' ');
        setText(newText);
    };
    const handleClearClick =()=>{
        // Clear text
        setText('');
    };
    const handleCopyClick =()=>{
        // Convert to uppercase
        navigator.clipboard.writeText(text);
        console.log("Text Copied");
    };
 
    const handleOnChnge = (event)=>{
        setText(event.target.value);
    };
    return(
    <>
    
        <div className='container'>
            <h1>Enter Your Text Here</h1>
            <div>
                <textarea value={text} onChange={handleOnChnge} placeholder="Whatever you want to write..."></textarea>
            </div>
            <button onClick={handleUpClick}>Convert To Uppercase</button>
            <button onClick={handleLowClick}>Convert To LowerCase</button>
            <button onClick={handleRemoveClick}>Remove Extraspace</button>
            <button onClick={handleClearClick}>Clear Text</button>
            <button onClick={handleCopyClick}>Copy Text</button>
            <h2>Text Summary</h2>
            <p> {text.split(" ").length} Words</p>
            <p>{text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h3>Preview Text</h3>
            <p>{text}</p>
        </div>
        </>
    );

};
export default Text;