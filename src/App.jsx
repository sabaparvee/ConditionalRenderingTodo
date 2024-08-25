import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [todos, setTodos] = useState([{
    title:"Hey",
    desc:"Iam a good todo"
  },
  {
    title:"Hey Another todo",
    desc:"Iam a good todo too"
  },{
    title:"Hey Iam grocery todo",
    desc:"Iam a good todo but Iam grocery todo"
  },
  ]);
  /* const Todo = ({todo}) => {
    return(
    <><div className="border-2 m-2 border-purple-400">
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
      </div>
    </>)
  }; */

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/*       {show?<button>I will shown only when button is true</button>:<button>I will shown only when button false</button>}
       */}
      {show && <button>I will shown only when second button is clicked</button>}
      {todos.map(todo=>{
        //return <Todo key={todo.title} todo={todo}/>
        return <div  key={todo.title}className="border-2 m-2 border-purple-400">
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
        </div>
      })}
      <div className="card">
        <button onClick={() => setShow(!show)}>count is {count}</button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
