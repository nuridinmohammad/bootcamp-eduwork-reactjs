import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementWithChecking,
  increment,
} from "../app/features/Counter/action";

const button = () => {
  const { count } = useSelector((stateCurrent) => stateCurrent.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", gap: "10px", fontSize: "2em" }}>
      <button onClick={() => dispatch(decrementWithChecking(1))}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
};

export default button;
