import React from 'react';

function Lists({ todoData, setTodoData }) { // props.todoData
        
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
                <div key={data.id}
                // style={getStyle(data.completed)}
                >
                    <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                        <div className="items-center">
                            <input 
                                type="checkbox"
                                defaultChecked={false}
                                onChange={()=>completedChange(data.id)}
                            />
                            <span className={`px-2 ${data.completed ? "line-through" : undefined}`}>{data.title}</span>
                        </div>
                        <div className="items-center">
                            <button // style={btnStyle} 
                                className="px-4 py-2 float-right"
                                onClick={()=>deleteTodo(data.id)}>😵</button>
                        </div>
                    </div>
                </div>
            ))}            
        </div>
    );
}

export default Lists;