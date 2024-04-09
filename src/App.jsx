import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  function increaseByThree() {
    //setCount(count + 1); // NIX
    //setCount(count + 1); // NIX
    //setCount(count + 1); // +1
    // updater function, forces React to update the state
    /* setCount((previousCount) => previousCount + 1); */
    setCount((previousCount) => {
      console.log(previousCount);
      return previousCount + 1; // new state
    });
    setCount((previousCount) => previousCount + 1); // implicit return
    setCount((previousCount) => {
      console.log(previousCount);
      return previousCount + 1;
    });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lifting state up</h1>
      <div className="card">
        <Counter count={count} onIncrease={increaseByThree} />

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
