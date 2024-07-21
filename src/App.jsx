import React, {useState} from 'react'
import './App.css'

function App() {
  const [output, setOutput] = useState("");

  const handleChange = (e)=>{
    setOutput(e.target.value)
  }

  const [font, setFont] = useState("Arial");

  const changeFont = (e)=>{
    if(e.target.id==="f1"){
      setFont("'Courier New', Courier, monospace");
      console.log("f1");
    }else if(e.target.id==="f2"){
      setFont("'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif");
      console.log("f2");
    }else if(e.target.id==="f3"){
      setFont("'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif");
      console.log("f3");
    }else if(e.target.id==="f4"){
      setFont("'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif");
      console.log("f4");
    }else if(e.target.id==="f5"){
      setFont("Cambria, Cochin, Georgia, Times, 'Times New Roman', serif");
      console.log("f5");
    }else{
      setFont("Arial");
      console.log("f7");
    }
  }
  const [bgClr, setBgClr] = useState("#000000");

  const bgColour = (e)=>{
    setBgClr(e.target.value)
  }

  const [ftClr, setFtClr] = useState("#FFFFFF");

  const ftColour = (e)=>{
    setFtClr(e.target.value)
  }

  const outputStyle = {
    fontFamily : font,
    backgroundColor : bgClr,
    color : ftClr,
  }

  return (
    <>
      <h1 className="heading">TypeTester</h1>
      <div className="typetesterMain">
        <div className="selectFont">
          <div className="font" id="f1" onClick={(e)=>changeFont(e)}> Font 1 </div>
          <div className="font" id="f2" onClick={(e)=>changeFont(e)}> Font 2 </div>
          <div className="font" id="f3" onClick={(e)=>changeFont(e)}> Font 3 </div>
          <div className="font" id="f4" onClick={(e)=>changeFont(e)}> Font 4 </div>
          <div className="font" id="f5" onClick={(e)=>changeFont(e)}> Font 5 </div>
        </div>
        <input type="text" placeholder='Start typing your text...' onChange={(e)=>handleChange(e)}/>
        <div className="output" style={outputStyle}>{output}</div>
        <div className="opSettings">
          <div className="bgClr">
            <p>Bg Color</p>
            <input type="color" value={bgClr} onChange={(e)=>bgColour(e)} />
            <p>{bgClr}</p>
          </div>
          <div className="ftClr">
            <p>Fnt Color</p>
            <input type="color" value={ftClr} onChange={(e)=>ftColour(e)} />
            <p>{ftClr}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
