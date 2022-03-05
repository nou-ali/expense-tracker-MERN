import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transactions = () => {
  const { transactions } = useContext(GlobalContext); //instead of context.traction, will use destructuring

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li className="minus">
            {transaction.text} <span>-400</span>
            <button className="delete-btn">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
