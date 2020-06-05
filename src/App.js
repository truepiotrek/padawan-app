import React, {useState} from 'react';
import './App.css';
import List from "./components/list";
import AddItem from "./components/add-item";

function App() {
    let nowaZmienna = JSON.parse(localStorage.getItem('lista'));

    console.log(nowaZmienna);

    if(!Array.isArray(nowaZmienna)){
        nowaZmienna = [];
    }

    const [state, setState] = useState(nowaZmienna);

    function addNewListItem(newListItem){
        let zmienna = [...state];  // klonowaie state
        zmienna.push(newListItem);  // dodawanie nowego itemu do klonu state
        setState(zmienna); // zapis nowego state

        // setState([newListItem, ...state]); // stworz nowa tabele z zawartoscia state, dodaj nowy element na początek

        localStorage.setItem('lista', JSON.stringify(zmienna));
    }

    return (
        <div className="App">
            <div className="header">
                <h1>
                    Moja mała lista
                </h1>
            </div>
            <List data={state} />
            <AddItem onAdd={addNewListItem} />
        </div>
    );
}

export default App;
