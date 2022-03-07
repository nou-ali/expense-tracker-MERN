import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//We need an initial state

//any glboal state will go in the object below
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

//Create context

export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); // need access to state and dispatch when calling a reducer action

  //actions that will make calls to our reducer
 
  async function getTransactions() {
      try {
        const res = await axios.get("/api/v1/transactions");

        dispatch({
          type: "GET_TRANSACTIONS",
          payload: res.data.data
        });
      } catch (error) {
        dispatch({
          type: "TRANSACTION_ERROR",
          payload: error.response.data.error
        });
      }
  }


  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }


  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
