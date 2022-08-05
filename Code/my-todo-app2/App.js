import React, { useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import InputForm from "./components/InputForm";

//arrow-function type component
const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Training",
      completed: false,
    },
    {
      id: 2,
      title: "Study",
      completed: false,
    },
    {
      id: 3,
      title: "Sleep",
      completed: false,
    },
  ]);

  const [seq, setSeq] = useState(4);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg: max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>
            <span>What is your main focus for today?</span>
          </h1>
        </div>
        <Lists todoList={todoList} setTodoList={setTodoList} />
        <InputForm
          todoList={todoList}
          setTodoList={setTodoList}
          seq={seq}
          setSeq={setSeq}
        />
      </div>
    </div>
  );
};

export default React.memo(App);

/*
import React, { Component } from "react";
import "./App.css";

//class type component
class App extends Component {

  id = 4;

  todoData = [
    {
      id: 1,
      title: '운동하기',
      completed: false
    },
    {
      id: 2,
      title: '공부하기',
      completed: false
    },
    {
      id: 3,
      title: '밥먹기',
      completed: false
    }
  ]

  state = {
    todoList: this.todoData,
    inputData: ""
  }

  btnStyle = {
    color: "red",
    border: "none",
    padding: "5px 5px",
    borderRadius: "10%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = (completed) => {
    return  {
      padding: "20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    };
  }

  deleteClick = (id) => {
    this.setState({todoList: this.state.todoList.filter(v => v.id !== id)})
  }

  clickCheckBox = (id) => {
    this.setState({todoList: this.state.todoList.map(v => {
      if(v.id === id) {
        v.completed = !v.completed;
      }
      return v;
    })})
  }

  handleChange = (e) => {
    this.setState({inputData: e.target.value});
  }

  todoInsert = (e) => {
    e.preventDefault();
    let newTodo = {id: this.id++, title: this.state.inputData, completed: false};
    this.setState({todoList: [...this.state.todoList, newTodo], inputData: ""});
  }

  render() {
    const { todoList, inputData } = this.state;
    return (
      <div className="container">
        <div className="todoBlock">
          <div>
          <h1><span>오늘의 할일</span></h1>
          </div>

          {todoList.map(data => 
            <div style={this.getStyle(data.completed)} key={data.id}>
            <input type="checkbox" defaultChecked={data.completed} onChange={() => this.clickCheckBox(data.id)}/>
            <span>{data.title}</span>
            <button style={this.btnStyle} onClick={() => this.deleteClick(data.id)}>Delete</button>
          </div>
          )}
          <div>
            <form style={{display: 'flex'}} onSubmit={this.todoInsert}>
              <input type='text' name="todoInput" step={{flex: '10', padding: '5px'}} placeholder="Insert" value={inputData} onChange={this.handleChange}/>
              <input type="submit" value="Insert" className="btn" style={{flex: '1'}}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
*/
