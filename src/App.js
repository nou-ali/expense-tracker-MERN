import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Incoming } from "./components/Incoming";
import { Transactions } from "./components/Transactions";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Incoming />
        <Transactions />
      </div>
    </div>
  );
}

export default App;
