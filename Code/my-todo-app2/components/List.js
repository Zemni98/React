import React, { useCallback, useState } from "react";
import EditForm from "./EditForm";
import TodoInfo from "./TodoInfo";

const List = (props) => {
  const { data, provided, snapshot, todoList, setTodoList } = props;

  const [isEditing, setEditing] = useState(false);

  const editClick = useCallback(
    (id) => {
      setTodoList(
        todoList.map((v) => {
          if (v.id === id) {
            setEditing(!isEditing);
          }
          return v;
        })
      );
    },
    [isEditing, setTodoList, todoList]
  );

  return (
    <div
      key={data.id}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {isEditing ? (
        <EditForm
          data={data}
          todoList={todoList}
          setTodoList={setTodoList}
          snapshot={snapshot}
          editClick={editClick}
        />
      ) : (
        <TodoInfo
          data={data}
          todoList={todoList}
          setTodoList={setTodoList}
          snapshot={snapshot}
          isEditing={isEditing}
          setEditing={setEditing}
          editClick={editClick}
        />
      )}
    </div>
  );
};

export default React.memo(List);
