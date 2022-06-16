import React, { useEffect, FC } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { Todo } from "../models/Todo";
import { useStore } from "../provider";
import { observer } from "mobx-react-lite";

export const TodoModule: FC = observer(() => {
  const { store } = useStore();

  useEffect(() => {
    store.loadTodos();
  }, [store]);

  console.log(store.todos);

  return (
    <div style={{ width: "400px" }}>
      <TodoForm />
      {store.todos?.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <button onClick={() => store.saveTodos()}>save todos</button>
      <button onClick={() => store.loadTodos()}>update todos</button>
    </div>
  );
});
