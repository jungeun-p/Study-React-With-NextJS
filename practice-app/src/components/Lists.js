import React, { useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Lists({ todoData, setTodoData }) { // props.todoData

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

    const handleEnd = (result) => {
        // source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함. 
        // 위치 변경이 없을 땐 종료
        if(!result.destination) return; 
        const newTodoData = [...todoData];
        
        // splice를 이용하여 배열의 순서를 변경
        // 1. 변경시키는 아이템을 index에서 삭제
        // 2. return값으로 지워진 아이템을 잡아주기
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);

        // 3. 원하는 자리에 reorderedItem을 insert 처리
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
    }

    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="todo">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoData.map((data, index) => (
                                <Draggable
                                    key={data.id}
                                    draggableId={data.id.toString()}
                                    index={index}
                                >
                                    {(provided, snapshot)=>(
                                    <div key={data.id} 
                                        ref={provided.innerRef} 
                                        {...provided.draggableProps} 
                                        {...provided.dragHandleProps} 
                                        className={`${
                                            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} 
                                            flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
                                    >
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
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder} 
                        </div>
                    )}
                </Droppable>  
            </DragDropContext> 
        </div>
    );
}

export default Lists;