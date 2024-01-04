import logo from "./logo.svg";
import "./App.css";

function MyButton() {
  return <button>I'm a button</button>;
}

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>MFangless</h1>
        <p>Testing</p>
        <MyButton />
      </header>
    </div>
    <p>Testing</p>
    <p>Testing 2</p>
    </>
  );
}

export default App;
