import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = (<h1>this is 
  JSX</h1>); // not valid js
// it works because parcel is transpiling this jsx back to js, using babel (which is js compiler)
// babel is JS compiler and v8 is JS engine (v8 manages garbage collection, memory etc + compiler)
// JSX is transpiled to react.createElement, then react.createElement creates js object
// js object is then rendered by root.render
// multi-line JSX needs brackets so babel can understand how to
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
console.log(heading); // prints react element object
// JSX is syntax like XML 
// react reads jsx elements as react element object
// JSX is used in react to improve DX