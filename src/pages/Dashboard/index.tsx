import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";
import { AppDispatch, RootState } from "../../app/store";

function Dashboard() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="https://redux.js.org/" target="_blank">
          <img
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
            className="logo redux"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React + Redux</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment ⬆️</button>
        <button onClick={() => dispatch(decrement())}>Decrement ⬇️</button>
        <p>count is {count}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Dashboard;
