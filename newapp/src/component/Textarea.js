import React, { useState } from 'react'
import "./textarea.css"


export default function Textarea(props) {

  const [text, setText] = useState("");

  function toUpcase() {
    setText(text.toUpperCase())
    props.funcAlert("You UpperCase the text","success")
  }

  function lovcase() {
    setText(text.toLowerCase())
    props.funcAlert("You Lowercase the text","success")
  }

  function allclear()
  {
    setText("")
    props.funcAlert("You Clear all the text","success")
  }

  function copied()
  {
    navigator.clipboard.writeText(text);
    props.funcAlert("You coppied text","success")

  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  

  function update(e) {
     setText(e.target.value)
 
  }

const [darkmood , changedark] = useState(
   {
    color : "black",
    backgroundColor : "white"
  }
  )

  function lengthOfWord() {
    let count = 0
    for (let i = 0; i < text.split(" ").length; i++) {
        if (text.split(" ")[i] === "") {
            count++
        }
    }
    return text.split(" ").length - count
} 

  const [mood , lmood] = useState("Dark Mood")

  function moodchange()
  {  console.log("chaged")
      if(darkmood.backgroundColor === "black")
      {
        changedark(
          {
          color : "black",
          backgroundColor : "white"
          }
        )
        lmood("Dark Mood")
      }
      else{
        changedark(
          {
          color : "white",
          backgroundColor : "black"
          }
        )
        lmood("Light Mood")
      }
  }
  // 
  
  return (
    < >
      <div style={darkmood} className={`p-2 bg-${props.mode}`}> 
        <h3 className='heading ' style={darkmood}>{props.heading}</h3>
        <textarea className="form-control w-100 my-1" style={darkmood} value={text} onChange={update} id="textu" cols="140" rows="10"></textarea>
        <p style={darkmood}>{ lengthOfWord()} word and {text.length} character</p>
        <p style={darkmood}>{0.008 * text.split(" ").length} minutes read</p>
        <div className="btn btn-primary my-1" onClick={toUpcase}>Conver to Upercase</div>
        <div className="btn btn-primary my-1 m-1" onClick={lovcase}>Conver to Lowercase</div>
        <div className="btn btn-primary my-1 m-1" onClick={speak}>Speak</div>
        <div className="btn btn-primary my-1 m-1" onClick={copied}>Copy</div>
        <div className="btn btn-primary my-1 m-1" onClick={allclear}>Clear All</div>
        <div className="btn btn-primary my-1 m-1" onClick={moodchange}>{mood}</div>
      
        <div className="summery my-2 " style={darkmood}>
         
       
         
          <h2 style={darkmood}>Preview</h2>
          <p style={darkmood}>{text}</p>
        </div>

      </div>




    </>
  )
}
