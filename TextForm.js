import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpclick=()=>{
      console.log("upper case was clicked "+text);
      let newText=text.toUpperCase()
      setText(newText);
      //setText("you clicked on handleupclick")
      props.showAlert("Converted to UpperCase","success");
    }

    const handleLowclick=()=>{
      //console.log("upper case was clicked "+text);
      let newText=text.toLowerCase()
      setText(newText);
      //setText("you clicked on handleupclick")
      props.showAlert("Converted to LowerCase","success");
    }

    const handleOnchange=(event)=>{
        setText(event.target.value);
        console.log("on change")
    }

    const handleDelete=()=>{
        setText("");
        props.showAlert("Deleted the content","danger");
    }

    const [text,setText]=useState("");
    /*setText("New Text");
    console.log(text)*/

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-2'>{props.heading}</h1>
      <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label"></label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnchange} 
          style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>

      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpclick}>Convert UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLowclick}>Convert LowerCase</button>
      <button disabled={text.length===0} type="button" class="btn btn-secondary mx-4" onClick={handleDelete}>Delete Content</button>
    </div>

    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Summary of Text</h1>
        <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} Words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes read</p>
    
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
