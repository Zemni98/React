import React, { useState } from "react";

const EditForm = (props) => {
  const { data, todoList, setTodoList, snapshot, editClick } = props;

  const [modifyValue, setModifyValue] = useState(data.title);

  const saveClick = (id) => {
    setTodoList(
      todoList.map((v) => {
        if (v.id === id) {
          v.title = modifyValue;
        }
        return v;
      })
    );
    editClick(id);
  };

  const handleChange = (e) => {
    setModifyValue(e.target.value);
  };

  return (
    <div
      className={`${
        snapshot.isDragging ? "bg-blue-100" : "bg-gray-100"
      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
    >
      <div className="items-center">
        <input type="text" value={modifyValue} onChange={handleChange} />
      </div>
      <div className="items-center">
        <button className="px-1" onClick={() => editClick(data.id)}>
          Cancel
        </button>
        <button className="px-1" onClick={() => saveClick(data.id)}>
          Save
        </button>
      </div>
    </div>
  );
};

export default React.memo(EditForm);
