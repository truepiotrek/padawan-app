import React from 'react';
import Checkbox from "./checkbox";
import Dump from "./dump";

function List(props) {

    function handleRemoval(index, event){
        if(typeof props.removeItem === 'function') {
            props.removeItem(index);
        }
    }

    function handleCheckbox(index, isChecked){
        console.log('checkbox checkniety');
        console.log(index, isChecked);
        if(typeof props.updateCheckbox === 'function') {
            props.updateCheckbox(index, isChecked);
        }
    }

    return (
        <div className="list">
            {props.data.map(function(arrayItem, index) {
                return (
                    <div className='list-item' key={index + ' ' + arrayItem.name}>
                        <Checkbox value={arrayItem.checked} handleCheckboxChange={function(name, isChecked) {handleCheckbox(index, isChecked)}}/>
                        {arrayItem.name}
                        <a href className={"item-removal"} onClick={function(event) {handleRemoval(index, event); }}>
                            X
                        </a>
{/*
                    <Dump value={arrayItem}/>
*/}
                    </div>
                )
            })}
        </div>
    )
}

export default List;
