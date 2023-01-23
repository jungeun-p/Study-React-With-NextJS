import React, { useState } from 'react';
import Form from './components/Form';
import Lists from './components/Lists';

const TodoApp = () => {
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

    return (
        <>
            <Form value={value} setValue={setValue} CreateTodo={CreateTodo} />
            <Lists todoData={todoData} setTodoData={setTodoData} />
        </>
    );
};

export default TodoApp;