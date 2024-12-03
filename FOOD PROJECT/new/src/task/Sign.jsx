import React, { useState } from 'react'

 const Sign = () => {
    const[data,setData]=useState('')
    const[input,setInput]=useState('')
    const[val,setValue]=useState('')

    const handle =(e)=>{
        setData(e.target.value)
    }
    const handlEmail =(e)=>{
        setInput(e.target.value)
    }
    const handlePass =(e)=>{
        setValue(e.target.value)
    }



    return (
        <div>
            <h1>Sign Up</h1>
            <form className='form'>
                full Name : <input type="text" value={data} onChange={handle} placeholder='type name' /><br></br>
                Email : <input type="text" value={input} onChange={handlEmail} placeholder='type name' /><br></br>
                Password : <input type="text" value={val} onChange={handlePass} placeholder='type name' /><br></br>

            </form>
        </div>
    )
}
export default Sign
