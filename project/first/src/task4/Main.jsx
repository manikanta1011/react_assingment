
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import {  FaLock } from "react-icons/fa";

 
const Main = ({ data,setData,setGroupName }) => {

 const [updateColor, setUpdateColor] = useState("");
 const [Popup, setPopup] = useState(false); 
 const [groupName, setGroupNameLocal] = useState(""); 
const navigate = useNavigate();

 const handleAddGroup = () => {
 setPopup(true);
 };
 
  const handleGroup = () => {

    if (groupName && updateColor) {

      setData([...data, { name: groupName, color: updateColor }]);
      setGroupNameLocal("");
     setUpdateColor("");
       setPopup(false);

    } else {
          alert("Please enter a group name and select a color.");
           }
            };
 
  const handleNavigateGroup = (nam) => {
   setGroupName(nam);
   navigate(`/Html/${nam}`);

  };
 
 
  return (
         <div className="main">
                    <ul className="all">
                 <h2>POCKET NOTES</h2>

        {data.map((group, index) => (
          <li key={index}>
             <div
              className="circle"
              style={{ backgroundColor: group.color }}
            >
              {group.name
                .split(" ")
                .map((word) => word[0]?.toUpperCase())
                .join("")}
            </div>
               <span
               onClick={() => handleNavigateGroup(group.name)}
                style={{backgroundColor: group.color,padding: "5px",borderRadius: "5px",}}>
               {group.name}
               </span>
               </li>
                   ))}
                   <button onClick={handleAddGroup} className="but"> + </button>
                   </ul>
 
                   {Popup && (
                      <div className="popup">
              <input type="text" value={groupName} onChange={(e) => setGroupNameLocal(e.target.value)}placeholder="Enter group name" />
              <div className="options">
              {["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#F4FF33"].map(
             (color) => (
                <div key={color}
                   className={`color-box ${
                     updateColor === color ? "selected" : "" }`} style={{ backgroundColor: color }}
                    onClick={() => setUpdateColor(color)}/> )
                    )}
               </div>
                   <button  className="bb"onClick={handleGroup}>Create</button>
                      <button className="vv" onClick={() => setPopup(false)}>Cancel</button>
                     </div>

      )}
 
      <div className="Pocket">
          <img src="./asset/pp.png" alt="" style={{ width: "50%" }} />
              <h1>Pocket Notes</h1>
         <p>
         Send and receive messages without keeping your phone online. <br />
         Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
         </p>
         <p className="ss"><FaLock/>end to end encripted</p>
        </div>
          </div>

  );

};
 
export default Main;

 


 