import React, { useState } from 'react';
import Lists from './components/Lists';

const TodoApp = () => {
    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");
    
    // const btnStyle = {
    //     color: "#fff",
    //     border: "none",
    //     padding: "5px 9px",
    //     borderRadius: "50%",
    //     cursor: "pointer",
    //     float: "right"
    // }

    // const getStyle = (completed) => {
    //     return {
    //         padding: "10px",
    //         borderBottom: "1px #ccc dotted",
    //         textDecoration: completed ? "line-through" : "none",
    //     }
    // }

    // Create
    const createTodo = (e) => {
        e.preventDefault();
        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        };
        setTodoData(prev => [...prev, newTodo]);
        setValue("");
    }

    // // Update
    // const completedChange = (id) => {
    //     const newTodoData = todoData.map((data) => {
    //         if(data.id === id) data.completed = !data.completed;
    //         return data;
    //     })
    //     setTodoData(newTodoData);
    // }
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    // // Delete
    // const deleteTodo = (id) => {
    //     const newTodoData = todoData.filter((data) => data.id !== id);
    //     setTodoData(newTodoData);
    // }

    return (
        <>
            <form style={{ display: 'flex' }} onSubmit={createTodo}>
                <input 
                    type="text"
                    name="value"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="write your work to do"
                    value={value}
                    onChange={handleChange}
                />
                <input 
                    type="submit"
                    value="input"
                    className="btn" 
                    style={{ flex: '1' }}
                />
            </form>
            <Lists todoData={todoData} setTodoData={setTodoData} />
        </>
    );
};

export default TodoApp;