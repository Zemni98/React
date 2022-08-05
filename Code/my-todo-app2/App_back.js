import React, { Component } from "react";
import "./App.css";
// class형 component를 이용할것이다.

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        {
          id: "1",
          title: "Training",
          completed: false,
        },
        {
          id: "2",
          title: "Eat",
          completed: false,
        },
        {
          id: "3",
          title: "Study",
          completed: false,
        },
      ],
      value: "",
    };
  }
  btnStyle = {
    color: "red",
    border: "none",
    padding: "5px 9px",
    borderRadius: "17%",
    cursor: "pointer",
    float: "right",
  };
  getStyle = (completed) => {
    return {
      padding: "20px",
      borderBottom: "1px #ccc solid",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  deleteClick = (id) => {
    // 해당 ID에 대한 목록을 지워야한다.
    // DATA를 지워야한다. => 열심히 하면 배열 처리 가능하다.
    // 변경된 데이터를 지우고 화면을 다시 그려야한다.
    const newTodoData = this.state.todoData.filter((data) => data.id !== id);
    // 변경된 Array를 가지고 어떻게 화면에 출력할까??
    // React State
    // React에서 데이터가 변할 때 화면을 다시 rendering하기 위해서 사용한다.
    // State는 component안에서 관리된다!
    // 일반적으로 생성자 안에서 정의된다!
    // 이름이 state라는 property
    this.setState({
      todoData: newTodoData,
    });
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = (e) => {
    // Submit event 발생해서 처리하고 있다.
    // 이런 default event처리를 안할래요!
    e.preventDefault();

    let newTodo = {
      id: Date.now(), // Unique한 값을 표현하기 위해서 현재 시간을 찍는다.
      title: this.state.value,
      completed: false,
    };

    this.setState({
      todoData: [...this.state.todoData, newTodo],
      value: "",
    });
  };
  handleCompleteChange = (id) => {
    // id에 대한 todoData의 Completed값을 변경시켜야한다.
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div>
            <h2>What is your main focus for today?</h2>
          </div>
          {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => this.handleCompleteChange(data.id)}
              />
              {data.title}
              <button
                style={this.btnStyle}
                onClick={() => this.deleteClick(data.id)}
              >
                delete
              </button>
            </div>
          ))}

          <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="todoInput"
              style={{ flex: "10", padding: "5px" }}
              placeholder="새로운 할 일을 입력하세요!"
              value={this.state.value}
              onChange={this.handleChange}
            />

            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: "1" }}
            />
          </form>
        </div>
      </div>
    );
  }
}
