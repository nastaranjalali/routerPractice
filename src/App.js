import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes'
import './App.css';

function App() {

    return (
        <div className="mainContainer">
            <Router>
                <Routes/>
            </Router>
        </div>
    );
}

export default App;
