import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./people";
import FireAlert from "./alertevent";
import WonChess from "./conditionals";
import Garage from "./lists"
import NameForm from "./forms";
import FormWithHook from "./useStateHook";

ReactDOM.render(

    <Home/>,
    document.getElementById('root2')
);

ReactDOM.render(
    <FireAlert />,
    document.getElementById('fire')
)

ReactDOM.render(
    <WonChess wonGame={-Infinity} />,
    document.getElementById('chess')
)

ReactDOM.render(
    <Garage />, document.getElementById('garage')
)

ReactDOM.render(
    <NameForm />,
    document.getElementById('nameForm')
)

ReactDOM.render(
    <FormWithHook />, document.getElementById('hookedForm')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
