import React, { useCallback, useState } from 'react';
import Form from './components/Form';
import Lists from './components/Lists';

const TodoApp = () => {
    console.log('TodoApp Component');
    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    // Create
    const CreateTodo = (e) => {
        e.preventDefault();
        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        };
        setTodoData(prev => [...prev, newTodo]);
        setValue("");
    }    

    // Delete
    const deleteTodo = useCallback((id) => {
        const newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
    }, [todoData]);  
    
    const deleteAllTodo = () => {
        setTodoData([]);
    };

    return (
        <>  
            <div className="flex justify-between mb-3">
                <h1>Todo List 📝</h1>
                <button onClick={deleteAllTodo}>All 😵</button>
            </div>
            <Form value={value} setValue={setValue} CreateTodo={CreateTodo} />
            <Lists todoData={todoData} setTodoData={setTodoData} deleteTodo={deleteTodo} />
        </> 
    );
};

export default TodoApp;