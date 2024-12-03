import React, { useContext } from 'react'
import Theme from '../context/First'
import './style.css'

 const Second = () => {
    const {input,changeStatus,index} = useContext(Theme)
    return (
      
             <select 
                            className='status' 
                            value={input.status} 
                            onChange={(e) => changeStatus(index, e.target.value)}
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
       
    )
}
export default Second
