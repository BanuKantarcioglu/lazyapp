import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';



const TODOS = ["a","b","c"];
ReactDOM.render(<App todos={TODOS}/>,document.getElementById('root'))
