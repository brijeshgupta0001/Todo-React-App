import TodoItem from "./TodoItem";
import { TodoItemContext } from "../Store/todo-item-store";
import { useContext } from "react";

const TodoItems = () => {
  const ContextObj = useContext(TodoItemContext);
  const AllTodo = ContextObj.TodoList;
  console.log(AllTodo);

  return (
    <div>
      {AllTodo.map((item) => (
        <TodoItem key={item.name} TodoName={item.name} TodoDate={item.date} />
      ))}
    </div>
  );
};

export default TodoItems;
