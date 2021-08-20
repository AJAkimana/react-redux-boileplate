import logo from "../logo.svg";
import "../App.css";
import { Notifier } from "components/Notifier";

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://akimanaja.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Akimana AJA
        </a>
        <p>React redux set up with a notifier</p>
        <button onClick={() => Notifier.success("It has been set")}>
          Test notify
        </button>
      </header>
    </div>
  );
};
