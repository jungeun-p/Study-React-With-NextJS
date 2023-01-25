import React from 'react'

export default function List({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot
}) {
    
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
        <div 
            key={id} 
            ref={provided.innerRef} 
            {...provided.draggableProps} 
            {...provided.dragHandleProps} 
            className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
        >
            <div className="items-center">
                <input 
                    type="checkbox"
                    defaultChecked={false}
                    onChange={()=>completedChange(id)}
                />
                <span className={`px-2 ${completed ? "line-through" : undefined}`}>{title}</span>
            </div>
            <div className="items-center">
                <button // style={btnStyle} 
                    className="px-4 py-2 float-right"
                    onClick={()=>deleteTodo(id)}>😵</button>
            </div>
        </div>
    )
}
