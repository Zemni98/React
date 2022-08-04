import React, { useCallback, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

// render() method가 존재하지 않는다.
// 우리 함수의 return 값이 JSX이다.
export default function App() {
  console.log("App Component");
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "Training",
      completed: false,
      edited: false,
    },
  ]);
  const [value, setValue] = useState("");
  const editClick = (id) => {
    console.log(id + "edit Click!");
    var ed = document.getElementById("edit");
    ed.type = "text";
    let x = document.getElementsByName("editBtn")[0];
    x.innerText = "Save";
    let Y = document.getElementsByName("titleSpan")[0];
    Y.innerText = "";
  };
  const deleteClick = useCallback(
    (id) => {
      const newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100 font-mono ">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg: max-w-lg font-mono ">
        <div className="flex justify-between mb-3 font-mono">
          <h2>What is your main focus for today?</h2>
        </div>

        <Lists
          editClick={editClick}
          deleteClick={deleteClick}
          todoData={todoData}
          setTodoData={setTodoData}
        />

        <Form
          todoData={todoData}
          setTodoData={setTodoData}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
}
