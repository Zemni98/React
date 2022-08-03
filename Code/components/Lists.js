import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Lists({ todoData, setTodoData }) {
  const deleteClick = (id) => {
    // 해당 ID에 대한 목록을 지워야한다.
    // DATA를 지워야한다. => 열심히 하면 배열 처리 가능하다.
    // 변경된 데이터를 지우고 화면을 다시 그려야한다.
    const newTodoData = todoData.filter((data) => data.id !== id);
    // 변경된 Array를 가지고 어떻게 화면에 출력할까??
    // React State
    // React에서 데이터가 변할 때 화면을 다시 rendering하기 위해서 사용한다.
    // State는 component안에서 관리된다!
    // 일반적으로 생성자 안에서 정의된다!
    // 이름이 state라는 property
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
    <div>
      <DragDropContext>
        <Droppable droppableId="to-do">
          {todoData.map((data) => (
            <Draggable>
              <div key={data.id}>
                <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                  <div className="items-center">
                    <input
                      type="checkbox"
                      defaultChecked={false}
                      onChange={() => handleCompleteChange(data.id)}
                    />{" "}
                    <span
                      className={data.completed ? "line-through" : undefined}
                    >
                      {data.title}
                    </span>
                  </div>
                  <div className="items-center">
                    <button onClick={() => deleteClick(data.id)}>delete</button>
                  </div>
                </div>
              </div>
            </Draggable>
          ))}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
