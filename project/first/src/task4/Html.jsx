import React, { useState } from "react";
import "./index.css";


 
const Html = ({ groupName }) => {

  const [date, setDate] = useState("");
  const [up, setUp] = useState([]);
  const handleInput = (e) => {

    setDate(e.target.value);

  };
 
  const handleInputChange = () => {
  setUp((prev) => [...prev, date]);
  setDate("");

  };
 
  return (
<div className="group-page">
<h4 className="yy">{groupName}</h4>
<p className="oo">Another productive way to use this tool to begin a daily writing routine. <br></br>One way is to generate a random paragraph with the intention to try to rewrite it while still.<br></br> The purpose here is to just get the writing started so that when the writer goes onto their day's <br></br> words are already flowing from their fingers.<br></br>
<span className="lp">9 march 2023 10:19 AM</span></p>
 
      <div className="content-container">
       <div className="paragraphs">

          {up.map((item, index) => (
         <p key={index} className="paragraph-item">
               {item}<br></br>
               <span className="lp">9 march 2023 10:19AM</span>
               </p>
              ))}
               </div>
 
        <div className="input-container">
          <input type="text" value={date} onChange={handleInput} placeholder="Write something..." className="text-input"/>
           <button onClick={handleInputChange} className="input-button">add</button>
         </div>
          </div>
         </div>

  );

};
 
export default Html;