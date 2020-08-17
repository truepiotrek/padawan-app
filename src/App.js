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

    const [todoList, setTodoList] = useState(nowaZmienna);
    const [editListItem, setEditListItem] = useState(null);

    function saveStateToLocalStorage(newState){
        localStorage.setItem('lista', JSON.stringify(newState));
    }

    function addNewListItem(newListItem){
        let zmienna = [...todoList];  // klonowaie state

        zmienna.push( { checked: false, name: newListItem} );  // dodawanie nowego itemu do klonu state

        setTodoList(zmienna); // zapis nowego state

        saveStateToLocalStorage(zmienna);
    }

    function removeListItem(index){
        console.log('funkcja usuwania dziala');
        let listItems = [...todoList];
        listItems.splice(index, 1);
        setTodoList(listItems);
        saveStateToLocalStorage(listItems);
    }

    function checkCheckbox(index, isChecked){
        let listItems = [...todoList];
        listItems[index].checked = isChecked;
        console.log(listItems[index])
        setTodoList(listItems);
        saveStateToLocalStorage(listItems);
    }

    function renderIfListHasItems() {
        if(todoList.length === 0) {
            return (
                <span className="default-message">Smuteczek... Dodaj coś no!</span>
            );
        }

        return (
            <List
                data={todoList}
                removeItem={removeListItem}
                updateCheckbox={checkCheckbox}
                editListItem={editListItem}
                setEditListItem={setEditListItem}
            />
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
