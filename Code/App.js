import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

// render() method가 존재하지 않는다.
// 우리 함수의 return 값이 JSX이다.
export default function App() {
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "Training",
      completed: false,
    },
  ]);
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg: max-w-lg">
        <div className="flex justify-between mb-3">
          <h2>What is your main focus for today?</h2>
        </div>

        <Lists todoData={todoData} setTodoData={setTodoData} />

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
