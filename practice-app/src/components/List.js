import React, { useState } from 'react'

const List = React.memo(({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    deleteTodo
}) => {

    const [editing, setEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    // Update
    const completedChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if(data.id === id) data.completed = !data.completed;
            return data;
        })
        setTodoData(newTodoData);
    } 

    
    // Title Update
    const handleEditChange = (e) => {
        setEditedTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTodoData = todoData.map((data) => {
            if(data.id === id) data.title = editedTitle;
            return data;
        });
        setTodoData(newTodoData);
        setEditing(false);
    }
    
    return (
        <>
        {editing ? (
                <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                    <div className="items-center">
                        <form>
                            <input 
                                value={editedTitle} 
                                onChange={handleEditChange}
                                className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                                autoFocus 
                            />
                        </form>
                    </div>
                    <div className="items-center">
                        <button // style={btnStyle} 
                            className="px-4 py-2 float-right"
                            onClick={() => setEditing(!editing)}>📄</button>
                        <button className="px-4 py-2 float-right" type="submit" onClick={handleSubmit}>✔️</button>                
                    </div>                    
                </div>
            ):(
                <div 
                    key={id} 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps} 
                    className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-60 border rounded`}
                >
                    <div className="items-center">
                        <input 
                            type="checkbox"
                            checked={completed}
                            onChange={() => completedChange(id)}
                        />
                        <span className={`px-2 ${completed ? "line-through" : undefined}`}>{title}</span>
                    </div>
                    <div className="items-center">
                        <button // style={btnStyle} 
                            className="px-4 py-2 float-right"
                            onClick={() => deleteTodo(id)}>😵</button>
                        <button
                            className="px-4 py-2 float-right"
                            onClick={() => setEditing(!editing)}>✏️</button>                
                    </div>
                </div>
            )}
        </>
    )
})

export default List