import React, {useState} from 'react';
import './App.css';
import List from "./components/list";
import AddItem from "./components/add-item";

function App() {
    const [state, setState] = useState(['Wbić badge dredgen do końca 11 sezonu',
        'Dociągnąć glory rank do 5500 na początku sezonu',
        'Zrobić wszystkie exo związane z rajdami']);

    function addNewListItem(newListItem){
        setState([newListItem, ...state]); // stworz nowa tabele z zawartoscia state, dodaj nowy element na początek
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
