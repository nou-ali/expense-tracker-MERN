import React, { createContext, useReducer } from "react";

//We need an initial state

//any glboal state will go in the object below
const initialState = {
  transactions: [
    { id: 1, text: "Headphones", amount: -25 },
    { id: 2, text: "Salary", amount: 500 },
    { id: 3, text: "DVD", amount: -10 },
    { id: 4, text: "Film Camera", amount: 300 },
  ],
};


//Create context

export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch]= useReducer(AppReducer, initialState); // need access to state and dispatch when calling a reducer action

    return (<GlobalContext.Provider>
      {children}
    </GlobalContext.Provider>)
}
