import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Incoming } from "./components/Incoming";
import { Transactions } from "./components/Transactions";
import { AddTransaction } from "./components/AddTransaction";

import {GlobalProvider} from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Incoming />
        <Transactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
