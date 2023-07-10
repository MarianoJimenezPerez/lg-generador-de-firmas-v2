import React, { useReducer, createContext } from "react";

export const UserContext = createContext();

const initialState = {
  data: {},
};

// Definimos Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATA":
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};

// Definimos Provider
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
