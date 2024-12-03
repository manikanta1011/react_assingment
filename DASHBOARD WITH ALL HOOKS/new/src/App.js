
import {BrowserRouter,Route,Routes} from "react-router-dom"
import User from "./task 2/User";
// import Project from "./task/Project"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}/>
        </Routes>
        </BrowserRouter>
  
    </div>
  );
}

export default App;
