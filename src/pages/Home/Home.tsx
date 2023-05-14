import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../../common/Navigation";
import {
  decrement,
  increment,
} from "../../reducers/counterReducer/counterSlice";
import ThemeWrapper from "../../common/ThemeWrapper";

function Home() {
  const counter = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Navigation />
      <h1>Home: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Home;
