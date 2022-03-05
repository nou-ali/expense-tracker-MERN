import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Incoming } from "./components/Incoming";
import { Transactions } from "./components/Transactions";
import { AddTransaction } from "./components/AddTransaction";


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Incoming />
        <Transactions />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
