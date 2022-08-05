import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from "./List";

const Lists = (props) => {
  const { todoList, setTodoList } = props;

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const currentTodoList = [...todoList];
    const beforeIndex = result.source.index;
    const afterIndex = result.destination.index;

    const removeTodoList = currentTodoList.splice(beforeIndex, 1);
    currentTodoList.splice(afterIndex, 0, removeTodoList[0]);
    setTodoList(currentTodoList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoList.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <List
                      data={data}
                      provided={provided}
                      snapshot={snapshot}
                      todoList={todoList}
                      setTodoList={setTodoList}
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
};

export default React.memo(Lists);
