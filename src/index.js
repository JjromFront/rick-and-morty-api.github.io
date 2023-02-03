import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./container/Home";

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <div className="container">
        <Home/>
    </div>
)