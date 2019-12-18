import React from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "./react-demo/CanvasDraw.tsx";

const App = () => {
  return <CanvasDraw />;
};

ReactDOM.render(<App />, document.getElementById("react-root"));
