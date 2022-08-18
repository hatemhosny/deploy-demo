import React, { useState } from "react";
import ReactDOM from "react-dom";
function App(props) {
    const [count, setCount] = useState(0);
    return (React.createElement("div", { className: "container" },
        React.createElement("h1", null,
            "Hi, ",
            props.name,
            "!"),
        React.createElement("img", { className: "logo", src: "http://127.0.0.1:8080/livecodes/assets/templates/react.svg" }),
        React.createElement("p", null,
            "You clicked ",
            count,
            " times."),
        React.createElement("button", { onClick: () => setCount(count + 1) }, "Click me")));
}
ReactDOM.render(React.createElement(App, { name: "React" }), document.querySelector("#app"));
