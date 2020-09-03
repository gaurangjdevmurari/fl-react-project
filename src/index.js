import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./containers/Home";
import 'antd/dist/antd.css';
import "./styles.scss";
import Store from "./middleware/Store";

ReactDOM.render(
    <Store>
        <Home/>
    </Store>,
    document.getElementById('root')
);
