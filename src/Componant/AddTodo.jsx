import style from "./AddTodo.module.css";
import { BiSolidCommentAdd } from "react-icons/bi";
import { useContext } from "react";
import { TodoItemContext } from "../Store/todo-item-store";
import { useState, useRef } from "react";
function AddTodo() {
  const name = useRef();
  const date = useRef();

  const ContextObj = useContext(TodoItemContext);

  const addNewItem = ContextObj.addNewItem;

  const onButtonClick = (event) => {
    event.preventDefault();
    const todoName = name.current.value;
    const dueDate = date.current.value;
    addNewItem(todoName, dueDate);
    name.current.value = "";
    date.current.value = "";
  };
  return (
    <div className="container">
      <form className="row gap" onSubmit={onButtonClick}>
        <div className="col-6">
          <input
            ref={name}
            className={style["insert"]}
            type="text"
            placeholder="Enter Todo Here"
          ></input>
        </div>
        <div className="col-4">
          <input ref={date} className={style["insert"]} type="date"></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-btn">
            <BiSolidCommentAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
