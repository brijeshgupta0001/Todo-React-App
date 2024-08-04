import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemContext = createContext({
  TodoList: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const TodoItemReducer = (CurrTodoList, Action) => {
  let newTodoList = CurrTodoList;

  if (Action.type === "NEW_ITEM") {
    newTodoList = [
      ...CurrTodoList,
      {
        name: Action.payload.name,
        date: Action.payload.date,
      },
    ];
  } else if (Action.type === "DELETE_ITEM") {
    newTodoList = CurrTodoList.filter(
      (item) => item.name !== Action.payload.name
    );
  }
  return newTodoList;
};

const TodoItemContextProvider = ({ children }) => {
  const Itemtodos = [];
  //const [TodoList, setTodoList] = useState(Itemtodos);

  const [TodoList, DispatchTodoItem] = useReducer(TodoItemReducer, Itemtodos);

  const addNewItem = (name, date) => {
    /*  setTodoList((currValue) => [
      ...currValue,
      {
        name: name,
        date: date,
      },
    ]);  */

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        name,
        date,
      },
    };
    DispatchTodoItem(newItemAction);
  };
  const deleteItem = (key) => {
    // const newTodoList = TodoList.filter((item) => item.name !== key);

    // setTodoList(newTodoList);

    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        name: key,
      },
    };
    DispatchTodoItem(newItemAction);
  };

  return (
    <TodoItemContext.Provider
      value={{
        TodoList: TodoList,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
