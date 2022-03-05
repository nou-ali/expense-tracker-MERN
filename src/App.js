import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Incoming } from "./components/Incoming";


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Incoming />
      </div>
    </div>
  );
}

export default App;
