import { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";

// const data = { name: "Muaz" };
function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState(0);

  const data = useMemo(() => {
    // return { name: "Muaz" };
    return calculateObject();
  }, []);

  // const data = calculateObject();

  return (
    <div className="App">
      <header className="App-header">
        <Header number={number < 5 ? 0 : number} data={data} />
        {number}
        <button onClick={() => setNumber(number + 1)}>increase</button>

        <br />
        <br />

        <input
          value={text}
          onChange={({ target }) => {
            setText(target.value);
          }}
        />
      </header>
    </div>
  );
}

function calculateObject() {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {}
  console.log("Calculating completed...");

  return { name: "Muaz" };
}

export default App;
