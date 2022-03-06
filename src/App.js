import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Incoming } from "./components/Incoming";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import {GlobalProvider} from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <div className="container">
      <Header />
        <Balance />
        <Incoming />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
