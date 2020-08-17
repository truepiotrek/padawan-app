import React from 'react';
import Checkbox from "./checkbox";
import ListItem from "./listItem";

function List(props) {

    function handleRemoval(index, event){
        if(typeof props.removeItem === 'function') {
            props.removeItem(index);
        }
    }

    function handleCheckbox(index, isChecked){
        console.log('checkbox checkniety');
        console.log(index, isChecked);
        if (typeof props.updateCheckbox === 'function') {
            props.updateCheckbox(index, isChecked);
        }
    }

    return (
        <div className="list">
            {props.data.map(function(arrayItem, index) {
                return (
                    <div className='list-item' key={index + ' ' + arrayItem.name}>
                        <Checkbox value={arrayItem.checked} handleCheckboxChange={function(name, isChecked) {handleCheckbox(index, isChecked)}}/>
                        <ListItem
                            name={arrayItem.name}
                            isEdited={props.editListItem === index}
                            setEditListItem={props.setEditListItem}
                            position={index}
                            editName={props.changeListItemName}
                        />
                        <a href='#' className={"item-removal"} onClick={function(event) {handleRemoval(index, event); }}>
                            X
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default List;
