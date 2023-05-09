import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import Button from "./components/button";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: "40%",
        left: "50%",
      }}
    >
      <Button />
    </div>
  );
};

const index = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

export default index;
