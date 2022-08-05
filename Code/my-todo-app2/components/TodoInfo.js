import React from "react";

const TodoInfo = (props) => {
  const { data, todoList, setTodoList, snapshot, editClick } = props;

  const clickCheckBox = (id) => {
    setTodoList(
      todoList.map((v) => {
        if (v.id === id) {
          v.completed = !v.completed;
        }
        return v;
      })
    );
  };

  const deleteClick = (id) => {
    setTodoList(todoList.filter((v) => v.id !== id));
  };

  return (
    <div
      className={`${
        snapshot.isDragging ? "bg-blue-100" : "bg-gray-100"
      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
    >
      <div className="items-center">
        <input
          type="checkbox"
          defaultChecked={data.completed}
          onChange={() => clickCheckBox(data.id)}
        />
        <span className={data.completed ? "line-through" : ""}>
          {data.title}
        </span>
      </div>
      <div className="items-center">
        <button className="px-3" onClick={() => editClick(data.id)}>
          Edit
        </button>
        <button className="px-1" onClick={() => deleteClick(data.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoInfo);
