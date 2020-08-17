import React, {useState} from 'react';

function ListItem(props) {

    const [inputValue, setInputValue] = useState(props.name);

    function enableListItemEdit(){
        props.setEditListItem(props.position);
    }

    function handleListItemChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('zadziało się');
        console.log(inputValue);
        if (typeof props.editName === 'function') {
            props.editName(props.position, inputValue);
        }
    }

    if (props.isEdited) {
        return (
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleListItemChange}/>
            </form>
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