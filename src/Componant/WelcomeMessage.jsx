import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemContext } from "../Store/todo-item-store";

const WelcomeMessage = () => {
  const ContextObj = useContext(TodoItemContext);

  const AllTodo = ContextObj.TodoList;

  return (
    <>
      {AllTodo.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>}
    </>
  );
};

export default WelcomeMessage;
