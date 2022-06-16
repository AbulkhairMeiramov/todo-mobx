import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react-lite";
import { store, Store } from "./models/Store";
import { TodoModule } from "./components/TodoModule";
import { AppProvider } from "./provider";

const store1 = new Store([]);
const store2 = new Store([]);
const store3 = new Store([]);

const App = observer(() => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <AppProvider store={store1}>
        <TodoModule />
        <AppProvider store={store2}>
          <TodoModule />
          <AppProvider store={store3}>
            <TodoModule />
          </AppProvider>
        </AppProvider>
      </AppProvider>
    </div>
  );
});

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
