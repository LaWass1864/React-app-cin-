import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.scss";
import { createRoot } from 'react-dom/client';

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)