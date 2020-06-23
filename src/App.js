import React, {useState} from 'react';
import './App.css';
import List from "./components/list";
import AddItem from "./components/add-item";
import Dump from "./components/dump";

function App() {
    let nowaZmienna = JSON.parse(localStorage.getItem('lista'));

    console.log(nowaZmienna);

    if(!Array.isArray(nowaZmienna)){
        nowaZmienna = [];
    }

    const [state, setState] = useState(nowaZmienna);

    function saveStateToLocalStorage(newState){
        localStorage.setItem('lista', JSON.stringify(newState));
    }

    function addNewListItem(newListItem){
        let zmienna = [...state];  // klonowaie state

        zmienna.push( { checked: false, name: newListItem} );  // dodawanie nowego itemu do klonu state

        setState(zmienna); // zapis nowego state

        // setState([newListItem, ...state]); // stworz nowa tabele z zawartoscia state, dodaj nowy element na początek

        saveStateToLocalStorage(zmienna);
    }

    function removeListItem(index){
        console.log('funkcja usuwania dziala');
        let listItems = [...state];
        listItems.splice(index, 1);
        setState(listItems);
        saveStateToLocalStorage(listItems);
    }

    function checkCheckbox(index, isChecked){
        let listItems = [...state];
        listItems[index].checked = isChecked;
        console.log(listItems[index])
        setState(listItems);
        saveStateToLocalStorage(listItems);
    }
    function renderIfListHasItems() {
        if(state.length === 0) {
            return (
                <span className="default-message">Smuteczek... Dodaj coś no!</span>
            );
        }

        return (
            <List data={state} removeItem={removeListItem} updateCheckbox={checkCheckbox}/>
        );
    }

    return (
        <div className="App">
            <div className="header">
                <h1>
                    Moja mała lista
                </h1>
            </div>
            {renderIfListHasItems()}
            <AddItem onAdd={addNewListItem} />
        </div>
    );
}

export default App;
