import React, { createContext, useReducer } from "react";
import ItemReducer from "./ItemReducer";

const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, []);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };
