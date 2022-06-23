import React, { useState } from 'react'

export default function Textarea(props) {
    const handleUpClick = () => {
        console.log("It was Clicked");
        setText("You have Clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "Success:");
    }

    const handleLoClick = () => {
        console.log("It was Clicked");
        setText("You have Clicked on handleLoClick")
        let newText2 = text.toLowerCase();
        setText(newText2)
        props.showAlert("Converted to LowerCase", "Success:");
    }

    const handleClearClick = () => {
        console.log("It was Clicked");
        setText("You have Clicked on handleLoClick")
        let newText3 = ''
        setText(newText3)
        props.showAlert("Text Cleared", "Success:");
    }

    const handleOnChange = (e) => {
        console.log("It was Clicked");
        setText(e.target.value)

    }

    const [text, setText] = useState("")
    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? 'white' : "#042743" }}>
                <h1 className='mb-4' style={{ color: props.mode === "light" ? 'black' : "yellow" }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "dark" ? '#13466e' : "white" }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>
                <button className="btn px-3 py-2 btn-primary" onClick={handleUpClick}>Click here to UpperCase</button>
                <button className="btn px-3 py-2 mx-4 btn-danger" onClick={handleLoClick}>Click here to LowerCase</button>
                <button className="btn px-3 py-2 mx-2 btn-warning" onClick={handleClearClick}>Clear Text</button>
                {/* <button className="btn px-3 py-2 mx-2 btn-info" onClick={handleWoinkClick}>Click Here</button>
                <button className="btn px-3 py-2 mx-2 btn-info" onClick={capitalizee}>Click Here to capitalize</button> */}

            </div>

            <div className="container my-4" style={{ color: props.mode === "dark" ? 'white' : "#042743" }}>
                <h1>Your Summary</h1>
                <p>{text.split(" ").filter((elem) => { return elem.length !== 0 }).length} Words , {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((elem) => { return elem.length !== 0 }).length} Minutes Read</p>
            </div>
        </>
    )
}
// .filter((elem) => {return elem.length!==0})