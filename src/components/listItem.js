import React, {useState} from 'react';

function ListItem(props) {

    const [inputValue, setState] = useState(null);

    function enableListItemEdit(){
        props.setEditListItem(props.position);
    }

    function handleListItemChange(event) {
        event.preventDefault();
    }

    if (props.isEdited) {
        return (
            <input type="text" value={props.name} onChange={handleListItemChange}/>
        )
    } else {
        return (
            <span onClick={enableListItemEdit}>
            {props.name}
        </span>
        )

    }
}

export default ListItem;