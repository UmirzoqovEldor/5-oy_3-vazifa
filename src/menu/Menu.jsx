// import React, { useState } from "react";

// function Menu() {
//   const [post, setPost] = useState([{ name: "test", id: 1 }]);
//   const [todo, setTodo] = useState("");
//   const elPost = (evt) => {
//     evt.preventDefault();

//     setPost([
//       ...post,
//       {
//         name: todo,
//         id: post.length > 0 ? post.length : 0,
//       },
//     ]);

//     setTodo("");
//   };
//   const hendlDelete = (id) => {
//     const result = post.filter((todo) => {
//       if (todo.id !== id) {
//         return todo;
//       }
//     });
//     setPost(result);
//   };

//   return (
//     <menu>
//       <form onSubmit={elPost} className="form-control  mt-5 w-100 bg-">
//         <input
//           type="text"
//           className=" form-control w-60 text-center "
//           onChange={(evt) => setTodo(evt.target.value)}
//           placeholder="Add todo..."
//           value={todo}
//         />
//         <button
//           type="submit"
//           className=" form-control btn btn-primary mt-3 w-60 "
//         >
//           Post qo'shish
//         </button>
//       </form>
//       <ul className="list-group w-100 my-5 ">
//         {post.map((todo, i) => (
//           <li
//             key={i}
//             className=" bg-secondary  list-group-item px-5 mt-3 w-75 list-group-item-action px-auto"
//           >
//             <div className="d-flex justify-content-between aligin-items-center">
//               <div className="d-flex align-items-center ">
//                 <p className="btn btn-primary mb-0">{i}</p>
//                 <p className="p=0 m=0 mt-0 mb-0">{todo.name}</p>
//               </div>
//               <button
//                 onClick={(evt) => hendlDelete(todo.id)}
//                 className="btn btn-danger"
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </menu>
//   );
// }

// export default Menu;
