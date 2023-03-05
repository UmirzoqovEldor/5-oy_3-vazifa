import { useState } from "react";
import "./App.css";
import "./menu/Menu.jsx"

function App() {
  // post qushish va delit qilish
  const [post, setPost] = useState([{ name: "test", id: 1 }]);
  const [todo, setTodo] = useState("");

  const elPost = (evt) => {
    evt.preventDefault();
    console.log(todo);
    setPost([...post, {
      name:todo,
      id:post.length> 0 ?post.length:0
    }]);

    setTodo("");
  };
  const hendlDelete = (id) =>{
 const result = post.filter((todo) =>{
  if(todo.id !== id){
    return todo;
  }
 });
 setPost(result)
  }
  // count qismi
  const [count, setCount] = useState(0);
  const  handlminus = () => {
if(count>0){
  setCount(count-1)
}
   }
   const  handlplus = () => {
    
      setCount(count+1)
    
       }

  return (
    <>
      <header className="App">
        <div className=" header-gruop container ">
          <h1 className="my-3">MyTube</h1>
          <form className="">
            <input
              type="text"
              className=" header-input "
              placeholder="Search..."
            />
            <button className=" header-btn ">Go</button>
          </form>
        </div>
      </header>

       <menu>
        <form onSubmit={elPost} className="form-control  mt-5 w-100 bg-">
          <input
            type="text"
            className=" form-control w-60 text-center "
            onChange={(evt) => setTodo(evt.target.value)}
            placeholder="Add todo..."
            value={todo}
          />
          <button
            type="submit"
            className=" form-control btn btn-primary mt-3 w-60 "
          >
            Post qo'shish
          </button>
        </form>
        <ul className="list-group w-100 my-5 ">
          {post.map((todo, i) => (
            <li
              key={i}
              className=" bg-secondary post-list  list-group-item px-5 mt-3 w-75 list-group-item-action px-auto"
            >
              <div className="d-flex justify-content-between aligin-items-center">
                <div className="d-flex align-items-center ">
                  <p className="btn btn-primary mb-0">{i}</p>
                  <p className="p=0 m=0 mt-0 mx-1 mb-0">{todo.name}</p>
                </div>
                <button onClick={(evt) => hendlDelete(todo.id)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </menu> 
      <div className="menu-count" >
<p className="btn bg-secondary count-paragrif">{count}</p>
<button onSubmit={handlminus} className="btn bg-primary">Minus</button>
<button onSubmit={handlplus} className="btn bg-primary">Plus</button>
      </div>
    </>
  );
}

export default App;
