import React, { useState } from "react";
import logo from "./logo.svg";
import testJpgImage from "./bg.jpg";
import testPngImage from "./bg.png";
import "./App.scss";

function Component() {
    let [count, setCount] = useState(0);
    function countUp() {
        setCount(count + 1);
    }
    return (
        <div className="App">
            <div className={"test"}></div>
            <h1>Testing sucks</h1>
            <div id="counter-value">{count}</div>
            <button id="button" onClick={() => countUp()}>
                Click Me
            </button>
            <img
                src={logo}
                alt={""}
            />
            <img
                src={testJpgImage}
                alt={""}
                style={{ height: "100vh", width: "auto" }}
            />
            <img
                src={testPngImage}
                alt={""}
                style={{ height: "100vh", width: "auto" }}
            />
        </div>
    );
}

export default Component;
