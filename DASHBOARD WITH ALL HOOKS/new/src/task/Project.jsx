import React, { useState, useEffect, useMemo, useCallback, useReducer, useRef } from 'react';
import './index.css'
// Task Reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task];
    case 'EDIT_TASK':
      return state.map((task) =>
        task.id === action.id ? { ...task, ...action.updatedTask } : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.id);
    case 'TOGGLE_STATUS':
      return state.map((task) =>
        task.id === action.id
          ? { ...task, status: task.status === 'Pending' ? 'In Progress' : 'Completed' }
          : task
      );
    default:
      return state;
  }
};

// Mock Data Fetch (Simulate fetching tasks from API)
const fetchTasks = async () => {
  return [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'Pending' },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 'In Progress' },
    { id: 3, title: 'Task 3', description: 'Description 3', status: 'Completed' },
  ];
};

const DashBoard = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('title');
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const taskInputRef = useRef();

  // Fetch Tasks
  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      fetchedTasks.forEach((task) => dispatch({ type: 'ADD_TASK', task }));
    };
    loadTasks();
  }, []);

  // Sorting and Filtering Logic with useMemo
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => filter === 'All' || task.status === filter);
  }, [tasks, filter]);

  const sortedTasks = useMemo(() => {
    return filteredTasks.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });
  }, [filteredTasks, sortBy]);

  // Handle Task Actions
  const handleAddTask = () => {
    const newTaskData = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      status: 'Pending',
      createdAt: new Date(),
    };
    dispatch({ type: 'ADD_TASK', task: newTaskData });
    setNewTask({ title: '', description: '' });
    taskInputRef.current.focus();
  };

  const handleEditTask = useCallback((id, updatedTask) => {
    dispatch({ type: 'EDIT_TASK', id, updatedTask });
  }, []);

  const handleDeleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', id });
  };

  const handleToggleStatus = (id) => {
    dispatch({ type: 'TOGGLE_STATUS', id });
  };

  return (
    <div className="dashboard">
      <h1>Task Dashboard</h1>
      <div className="filters">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All Tasks</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="title">Sort by Title</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>

      <div className="task-form">
        <input
          type="text"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          placeholder="Task Title"
        />
        <input
          type="text"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          placeholder="Task Description"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="task-list">
        {sortedTasks.map((task) => (
          <div key={task.id} className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => handleToggleStatus(task.id)}>
              Toggle Status
            </button>
            <button onClick={() => handleEditTask(task.id, { title: 'Updated', description: 'Updated' })}>
              Edit
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
