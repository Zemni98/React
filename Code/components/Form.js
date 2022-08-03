import React from "react";

export default function Form({ todoData, setTodoData, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    // Submit event 발생해서 처리하고 있다.
    // 이런 default event처리를 안할래요!
    e.preventDefault();

    let newTodo = {
      id: Date.now(), // Unique한 값을 표현하기 위해서 현재 시간을 찍는다.
      title: value,
      completed: false,
    };

    setTodoData([...todoData, newTodo]);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex pt-2">
      <input
        type="text"
        name="todoItem"
        placeholder="새로운 할일을 입력하세요"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        value={value}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="입력"
        className="p-2 text-blue-400 border-blue-400 rounded hover:text-white hover:bg-blue-200"
      />
    </form>
  );
}
