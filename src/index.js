import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


// import {sum,sub,mul,div,mod} from './calculater'
// import Time from './time';
ReactDom.render(
  <>
    {/* <h1>Addition of two number {sum(1,2)}</h1>
    <h1>Substraction of two number {sub(1,2)}</h1>
    <h1>Multiplication of two number {mul(1,2)}</h1>
    <h1>Division of two number {div(1,2)}</h1>
    <h1>Mod of two number {mod(1,2)}</h1>
    <h1>{Time}</h1> */}
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</>,
document.getElementById('root')
);