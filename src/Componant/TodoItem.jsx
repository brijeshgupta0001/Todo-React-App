import { RiDeleteBin6Fill } from "react-icons/ri";
import { TodoItemContext } from "../Store/todo-item-store";
import { useContext } from "react";
function TodoItem({ TodoName, TodoDate }) {
  const { deleteItem } = useContext(TodoItemContext);
  return (
    <div className="container">
      <div className="row gap">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => deleteItem(TodoName)}
          >
            <RiDeleteBin6Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
