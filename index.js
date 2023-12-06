import React from "react";
import ReactDOM from "react-dom";
import "./component/header.css";
import Products_list from "./component/Products_list";
import Header from "./component/header";

const root = ReactDOM.createRoot(document.getElementById("root"));

function doSometng() {
  console.log("hello im clicked");
}

root.render(
  <div>
    <Header />
    <Products_list />
    <button onClick={doSometng}>submit</button>
  </div>,
  document.getElementById("root")
);
