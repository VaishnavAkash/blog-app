import React, { createContext, useReducer } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const initialState = {
    value: 69,
    loading: false,
    error: null,
    currentUser: null,
    theme: "light",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "signInStart":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "signInSuccess":
        return {
          ...state,
          currentUser: action.payload,
          loading: false,
          error: null,
        };
      case "signInFailure":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case "toggleTheme":
        return {
          ...state,
          theme: state.theme == "light" ? "dark" : "light",
        };
      case "updateStart":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "updateSuccess":
        return {
          ...state,
          currentUser: action.payload,
          loading: false,
          error: null,
        };
      case "updateFailure": {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
      case "deleteUserStart": {
        return {
          ...state,
          loading: true,
          error: null,
        };
      }
      case "deleteUserSuccess": {
        return {
          ...state,
          currentUser: null,
          loading: false,
          error: null,
        };
      }
      case "deleteUserFailure": {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
