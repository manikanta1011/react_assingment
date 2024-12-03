import React from 'react'
import { useNavigate } from 'react-router-dom';
import './food.css'
 const Food = () => {
    const nav = useNavigate();

    const handle=()=>{
        nav('/Welcome')
    }

    return (
        <div className='food'>
            
            <img src="./asset/Group 18118.png" alt="pic" onClick={handle}/>
           
            
        </div>
    )
}
export default Food
