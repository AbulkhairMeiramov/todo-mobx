import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { Todo } from "../models/Todo";
import { useStore } from "../provider";

export const TodoItem: FC<{ todo: Todo }> = observer(({ todo }) => {
  const { store } = useStore();
  const doneTodo = () => {
    if (todo.completed) {
      return "line-through";
    }
    return "none";
  };
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "4px",
        display: "flex",
        borderRadius: "4px",
        margin: "10px 0",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <input
        value={todo.text}
        onChange={(e) => {
          todo.setText(e.target.value);
        }}
        style={{
          fontSize: "16px",
          padding: "4px",
          width: "340px",
          boxSizing: "border-box",
          border: "none",
          textDecoration: doneTodo()
        }}
      />
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => todo.setCompleted(!todo.completed)}
      />
      <button
        type="submit"
        style={{
          fontSize: "20px",
          borderRadius: "4px",
          border: "1px solid #ba5959",
          padding: "0 8px",
          background: "#fc7777"
        }}
        onClick={() => {
          store.removeTodo(todo);
        }}
      >
        -
      </button>
    </div>
  );
});
