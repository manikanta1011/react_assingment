// import React, { useState, useMemo } from "react";

// function Use() {
//   const [fil, setFil] = useState("");
//   const items = ["appl", "banana", "cherry", "date", "elderberry"];

//   const filteredItems = useMemo(()=>{
//        return   items.filter((neww)=>neww.includes(fil)) 

//   },[fil,items])
 

//   return (
//     <div>
//       <input
//         type="text"
//         value={fil}
//         onChange={(e) => setFil(e.target.value)}
//         placeholder="Filter items"
//       />
//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Use;


// import React, { useMemo } from 'react'
// import { useState } from 'react'
//  const Use = () => {
//     const [data,setData]=useState(0)

//     const  x =2
//     const y = 4

//     const newValue = useMemo(()=>{
//         return x+y*3
//     },[x,y])
//     return (
//         <div>
//             <button onClick={()=>setData(data + 1)}>add</button>
//             <p>counter:{data} </p>
//             <p>updated:{newValue}</p>
//         </div>
//     )
// }

// export default Use



// import React from 'react'

//  const Use = () => {
//     const [data,setData]=useState()
//     const [isRunning, setIsRunning] = useState(false);

//     const mani=useMemo(()=>{
//        if(isRunning){
//        const kiran = setInterval(() => {
//         setData((prev)=>prev+1)
//        }, 1000);
//        }
//     },[isRunning,time])
//     return (
//         <div>
//             <button onClick={handle}>start</button>
//             <button onClick={handle}>stop</button>
//             <button onClick={handle}>restart</button>
//         </div>
//     )
// }

// export default Use





import React, { useMemo, useState } from 'react'

 const Use = () => {
    const [data,setData]=useState(false)

    const add = useMemo(()=>{
        return data? "on": "off"

    },[data])

    return (
        <div style={{backgroundColor : data? "red":"green"}}>
            <button onClick={()=>setData(!data)}>{add}</button>
            <p>updated ;{data? "welcome" : "thank you"}</p>
        </div>
    )
}

export default Use








