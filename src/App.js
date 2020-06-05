import React from 'react';
import './App.css';
import List from "./components/list";
import AddItem from "./components/add-item";

function App() {
    return (
        <div className="App">
            <div className="header">
                <h1>
                    Moja mała lista
                </h1>
            </div>
            <List />
            <AddItem />
        </div>
    );
}

export default App;
