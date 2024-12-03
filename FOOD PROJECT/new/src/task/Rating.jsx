import React from 'react'
import './rating.css'
import { useNavigate } from 'react-router-dom'

 const Rating = () => {
    const navit=useNavigate()
    const arro=()=>{
        navit("/Address")
    }
    const handleas=()=>{
        navit("/Reviews")
    }
    return (
        <div>
            <div className='kia'>
            <button className="dcx" onClick={arro}>&lt;</button>
            <img src="/asset/ball (1).png" alt="" className='ajk'/>
            <img src="/asset/piu.png" alt="" className='cvrt'/>
            <h3>Pizza Hut</h3>
            <p>4002 pretty view</p>
            <p className='yuo'>order Delivered</p>
            <h4>Please Rate Delivery Service</h4>
            <h5 className='rdf'>Good</h5>
            <p className='faz'>****</p>
            <input className='tyu' type="text" placeholder='write something'/>
            <button className='klb' onClick={handleas}>Submit</button>
            </div>
        </div>
    )
}

export default Rating
