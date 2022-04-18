import React from 'react'
import ReactDom  from 'react-dom'
function sum(a,b){
    let c=a+b;
    return c;
}
function sub(a,b){
    let c=a-b;
    return c;
}
function mul(a,b){
    let c=a*b;
    return c;
}
function div(a,b){
    let c=a/b;
    return c;
}
function mod(a,b){
    let c=a%b;
    return c;
}
// export default sum;
export {sum,sub,mul,div,mod};