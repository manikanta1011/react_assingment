import { FaStar } from "react-icons/fa";
 import './fooddet.css';
import { useNavigate } from "react-router-dom";
 const FoodDetails=()=>{
    const navigated=  useNavigate();
    const arrow=()=>{
      navigated('/Home')
    }
    const handler=()=>{
        navigated("/Cart")
      }
    return(
        <div className="fooddetails-contai">
         <button className="oip" onClick={arrow}>&lt;</button>
            <div className="fooddetails-image">
            
                <img  src="/asset/neww.png" alt="imagename" />
            </div>
            <div className="fooddis">
            <div className="g">
                <h1>Ground Beef Tacos</h1>
               <p><FaStar/>4.5</p>
            </div>
            <div className="rate">
                <div>
                <p className="foodrate">$ 9.50</p>
                </div>
                <div className="rates">
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
            <div className="ground">
                <p>Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.</p>
            </div>
            <h4 className="bm">Choice of add on</h4>
            <div className="pepp">
                <img className="pep" src="/asset/ll.png" alt="imagename"/>
                <img className="pep" src="/asset/kk.png" alt="imagename"/>
                <img className="pep" src="/asset/gg.png" alt="imagename"/>
            </div>
            <div className="butcart">
                <button className="buttcart" onClick={handler}>Add TO CART</button>
            </div>
            </div>
        </div>
    )
 }
 export default FoodDetails;
