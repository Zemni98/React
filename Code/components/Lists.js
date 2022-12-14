import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from "./List";

const Lists = React.memo(
  ({ editClick, deleteClick, todoData, setTodoData }) => {
    console.log("Lists Component");
    const handleDrop = (e) => {
      // e: event 객체, event에 대한 세부정보를 가지고 있다.
      // e.source : drag한 객체, e.destination : drop한 객체
      if (!e.destination) return;

      const newTodoData = todoData;

      // drag되는것을 삭제시키는 Code
      const [reorder] = newTodoData.splice(e.source.index, 1);

      // drop되는 위치에 삽입시키는 Code
      newTodoData.splice(e.destination.index, 0, reorder);

      setTodoData(newTodoData);
    };

    return (
      <div>
        <DragDropContext onDragEnd={handleDrop}>
          <Droppable droppableId="to-do">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {todoData.map((data, index) => (
                  <Draggable
                    key={data.id}
                    draggableId={data.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      // component
                      <List
                        editClick={editClick}
                        deleteClick={deleteClick}
                        id={data.id}
                        title={data.title}
                        completed={data.completed}
                        todoData={todoData}
                        setTodoData={setTodoData}
                        provided={provided}
                        snapshot={snapshot}
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
  }
);

export default Lists;
