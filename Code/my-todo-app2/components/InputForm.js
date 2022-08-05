import React, { useState, useCallback } from "react";

const InputForm = (props) => {
  const { todoList, setTodoList, seq, setSeq } = props;

  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const todoInsert = useCallback(
    (e) => {
      e.preventDefault();
      let newTodo = { id: seq, title: inputData, completed: false };
      setTodoList([...todoList, newTodo]);
      setInputData("");
      setSeq(seq + 1);
    },
    [inputData, seq, setSeq, setTodoList, todoList]
  );

  return (
    <div>
      <form className="flex pt-2" onSubmit={todoInsert}>
        <input
          className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
          type="text"
          name="todoInput"
          placeholder="Please enter a new to do"
          value={inputData}
          onChange={handleChange}
        />
        <input
          className="p-2 text-blue-400 border-blue-400 rounded hover:text-white hover:bg-blue-200"
          type="submit"
          value="Insert"
        />
      </form>
    </div>
  );
};

export default React.memo(InputForm);
