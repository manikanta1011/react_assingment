import React, { useEffect, useState, useMemo } from 'react';
import Theme from '../context/First';
import './style.css'
import Second from './Second';

const User = () => {
    const [data, setData] = useState([]); 
    const [submitted, setSubmitted] = useState('');
    const [error, setError] = useState(null);
    const [filtered, setFiltered] = useState(''); 

    useEffect(() => {
        fetch("./json.json")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(() => setError("Failed to load data"));
    }, []);

    const change = (e) => {
        setSubmitted(e.target.value); 
    };

    const addTask = () => {
        if (submitted.trim() !== "") {
            const newTask = {
                name: submitted,
                title: "Title",
                description: "add any description",
                status: "Pending", 
            };
            setData([...data, newTask]);
            setSubmitted("");
        }
    };

    const deleteTask = (index) => {
        const updatedData = data.filter((_, i) => i !== index); 
        setData(updatedData);
    };

    const editTask = (index) => {
        const editedName = prompt("Edit your task", data[index].description);
        
        if (editedName) {
            const updatedData = [...data];
            updatedData[index].description = editedName;
            setData(updatedData);
        }
    };

    const changeStatus = (index, newStatus) => {
        const updatedData = [...data];
        updatedData[index].status = newStatus;
        setData(updatedData);
    };

    const filteredData = useMemo(() => {
        return data.filter(task =>
            task.name.toLowerCase().includes(filtered.toLowerCase()) || 
            task.description.toLowerCase().includes(filtered.toLowerCase()) ||
            task.status.toLowerCase().includes(filtered.toLowerCase())
        );
    }, [data, filtered]);

    const handleFilterChange = (e) => {
        setFiltered(e.target.value); 
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <input className='in' type="text" placeholder="Enter task" value={submitted} onChange={change} />
            <button className='out' onClick={addTask}>Add</button><br />

            <input className='fil' type="text" placeholder="Filter the title" value={filtered} onChange={handleFilterChange}  />

            <div className='car'>
                {filteredData.map((input, index) => (
                    <div key={index} className='cards'>
                        <h4>NAME : {input.name}</h4>
                        <h4>TITLE : {input.title}</h4>
                        <h4>DESCRIPTION : {input.description}</h4>
                        <h4>STATUS : {input.status}</h4>
                        <button className='but' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='edit' onClick={() => editTask(index)}>Edit</button>
                        
                        <Theme.Provider value={{input,changeStatus,index}}>
                          <Second/>
                    </Theme.Provider>   
                       
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default User;

