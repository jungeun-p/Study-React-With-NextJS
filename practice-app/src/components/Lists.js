import React from 'react';

function Lists({ todoData, setTodoData }) { // props.todoData
        
    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }

    const getStyle = (completed) => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none",
        }
    }

    // Update
    const completedChange = (id) => {
        const newTodoData = todoData.map((data) => {
            if(data.id === id) data.completed = !data.completed;
            return data;
        })
        setTodoData(newTodoData);
    }

    // Delete
    const deleteTodo = (id) => {
        const newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
    }

    return (
        <div>
            {todoData.map((data) => (
                <div style={getStyle(data.completed)} key={data.id}>
                    <input 
                        type="checkbox"
                        defaultChecked={false}
                        onChange={()=>completedChange(data.id)}
                    />
                    {data.title}
                    <button 
                        style={btnStyle} 
                        onClick={()=>deleteTodo(data.id)}
                    >
                        😵
                    </button>
                </div>
            ))}            
        </div>
    );
}

export default Lists;