// import React, { useEffect } from 'react'
// import './home.css'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// const Home = () => {
//     const navigated=useNavigate();
     
// const handlejk=()=>{
//     navigated("/Category")
// }
//    const handleacf=()=>{
//     navigated("/Profile")
//    }

//     const handlef=()=>{
//       navigated("/FoodDetails")
//     }
//     const [data,setData]=useState([])
    
//     useEffect(()=>{
//         fetch("/date.json ")
// .then(response=>response.json())
// .then(json=>setData(json))

//     },[])
//     return (
//         <div className='he'>
//             <div className='head'>
//                 <img src="./asset/Group (1).png" alt="pic" className='mb' onClick={handleacf} />
              
//                 <span className='war'>Deliver To</span>
//                 <img src="./asset/Group (2).png" alt="pi" className='mbd'/>
//             </div>
//             <div>
//                 <h4>What Would you Like</h4><br></br>
          
//             </div>
//             <div>
//                 <input className="asd" type="text" placeholder='find for food or restaurnent'/>
//             </div>
//             <div className='mapped'>
//             {data.map((val,index)=>(
                
//                      <div key={index} className='ima' onClick={handlejk}>
//                              <img src={val.image} alt="" width={"60px"} />
//                             <h5>{val.name}</h5>
//                      </div>
//             ))}
//             </div>
//             <div className='fla'>
//                 <h3 className='plk'>features restaurnent</h3>
//                 <p className='ak'>view all</p>
//                 </div>
//                 <div className='khan'>
//                     <img src="./asset/last.png" alt="piu"  width={"200px"} onClick={handlef}/>
//                    <img src="./asset/two.png" alt="bur"  width={"200px"}/>
                
//                 </div>
//                 <div className='icons'>
//                     <img src="./asset/three.png" alt="pol" width={"20px"} />
//                     <img src="./asset/four.png" alt="pol" width={"20px"}/>
//                     <img src="./asset/five.png" alt="pol" width={"20px"} />
//                     <img src="./asset/six.png" alt="pol" width={"20px"}/>
//                     <img src="./asset/three.png" alt="pol"width={"20px"} />
//                 </div>
           
//         </div>
//     )
// }
// export default Home

import React, { useEffect, useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // For filtered items
  const [searchTerm, setSearchTerm] = useState(""); // Search input

  useEffect(() => {
    fetch("/date.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setFilteredData(json); // Initialize filtered data
      });
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter data based on the search term
    const filtered = data.filter((item) => {
      const name = item.name?.toLowerCase() || "";
      const category = item.category?.toLowerCase() || ""; // Ensure `category` is a string
      return name.includes(value) || category.includes(value);
    });
    setFilteredData(filtered);
  };

  const handleFoodDetails = () => {
    navigate("/FoodDetails");
  };

  const handlejk=()=>{
    navigate("/Category")
}
   const handleacf=()=>{
    navigate("/Profile")
   }
   const kkk=()=>{
    navigate("/Fav")
   }
   const handler=()=>{
    navigate("/Logout")
   }

  return (
    <div className="he">
      <div className="head">
        <img src="./asset/Group (1).png" alt="pic" className="mb" onClick={handler} />
        <span className="war">Deliver To</span>
        <img src="./asset/Group (2).png" alt="pi" className="mbd" onClick={handleacf}/>
      </div>

      <div>
        <h4>What Would You Like</h4>
        <br />
      </div>

      <div>
        <input
          className="asd"
          type="text"
          placeholder="Find food or restaurant"
          value={searchTerm} // Controlled input
          onChange={handleSearchChange} // Trigger filter on input change
        />
      </div>

      <div className="mapped">
        {filteredData.length > 0 ? (
          filteredData.map((val, index) => (
            <div key={index} className="ima" onClick={handlejk}>
              <img src={val.image} alt={val.name} width={"60px"} />
              <h5>{val.name}</h5>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>

      <div className="fla">
        <h3 className="plk">Featured Restaurant</h3>
        <p className="ak" onClick={kkk}>View All</p>
      </div>

      <div className="khan">
        <img
          src="./asset/last.png"
          alt="piu"
          width={"200px"}
          onClick={handleFoodDetails}
        />
        <img src="./asset/two.png" alt="bur" width={"200px"} />
      </div>

      <div className="icons">
        <img src="./asset/three.png" alt="pol" width={"20px"} />
        <img src="./asset/four.png" alt="pol" width={"20px"} />
        <img src="./asset/five.png" alt="pol" width={"20px"} />
        <img src="./asset/six.png" alt="pol" width={"20px"} />
        <img src="./asset/three.png" alt="pol" width={"20px"} />
      </div>
    </div>
  );
};

export default Home;
