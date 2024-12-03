import React from 'react'
import { useNavigate } from 'react-router-dom'
import './cat.css'
 const Category = () => {
  const navigated=  useNavigate();
  const arrow=()=>{
    navigated('/Home')
  }
    
    return (
        <div className='total'>
         
            <div className='pan'>
                <div className='km'>
            <button className="backkk" onClick={arrow}>&lt;</button>
            </div>
                <h4 className='fats'>fast<br></br> <span>Food</span> <p>80 types of pizza</p></h4>
              <img src="/asset/full.png" alt="piz" width={"200px"}/>
            </div>
            <div>
                <p className='kha'>sort by : <span className='yy'>products</span></p>
            </div>
            <div className='skl'>
                <img  src="/asset/ball (2).png" alt=""  width={"250px"}/>
                <p>Chicken Hawaiian<br></br>
                Chicken, Cheese and pineapple</p>
            </div>
            <div className='sql'>
                <img src="/asset/ball (1).png" alt="" width={"250px"}/>
            </div>
           
            
        </div>
    )
}
export default Category
