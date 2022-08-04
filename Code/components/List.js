import React from "react";

const List = React.memo(
  ({
    editClick,
    deleteClick,
    id,
    title,
    completed,
    edited,
    todoData,
    setTodoData,
    provided,
    snapshot,
  }) => {
    console.log("List Component");

    const handleEditChange = (id, data) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.edited = !data.edited;
        }
        return data;
      });
      setTodoData(newTodoData);
    };

    const handleCompleteChange = (id) => {
      // id에 대한 todoData의 Completed값을 변경시켜야한다.
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
    };
    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
      >
        <div
          className={` ${
            snapshot.isDragging ? "bg-violet-200" : "bg-pink-100"
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  border rounded font-mono`}
        >
          <div className="items-center">
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleteChange(id)}
            />{" "}
            <input
              type="hidden"
              id="edit"
              onChange={() => handleEditChange(id)}
            />{" "}
            <span
              name="titleSpan"
              className={completed ? "line-through" : undefined}
            >
              {title}
            </span>
          </div>

          <div className="items-center font-mono ">
            <button class="px-3" name="editBtn" onClick={() => editClick(id)}>
              edit
            </button>
            <button class="px-1" onClick={() => deleteClick(id)}>
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default List;
