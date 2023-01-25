import React, { useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from './List';

const Lists = React.memo(({ todoData, setTodoData, deleteTodo }) => { // props.todoData
    console.log('Lists component');
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
                                        <List 
                                            key={data.id}
                                            id={data.id}
                                            title={data.title}
                                            completed={data.completed}
                                            todoData={todoData}
                                            setTodoData={setTodoData}
                                            provided={provided}
                                            snapshot={snapshot}
                                            deleteTodo={deleteTodo}
                                        />
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
})

export default Lists;