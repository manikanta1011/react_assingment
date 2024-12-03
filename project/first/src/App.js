

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./task4/Main";
import Html from "./task4/Html";
 
function App() {

  const [groupName, setGroupName] = useState("");
  const[data,setData]=useState([])
 
  return (
<BrowserRouter>
      <Routes>
       <Route path="/" element={<Main data={data} setData={setData} setGroupName={setGroupName} />}  />
       <Route path="/Html/:nam" element={<Html groupName={groupName} />}  />
      </Routes>
</BrowserRouter>

  );

}
 
export default App;
